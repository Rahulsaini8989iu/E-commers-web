import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);


    const addToCart = (data) => {
        setCartItems((prev) => {
            const exists = prev.find((item) => item.id === data.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...data, quantity: 1 }];

        });
    };

    const RemoveFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    };

    const increaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    }
    const decreaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item

            )
        );
    }

    const totalPrice = cartItems.reduce(
        (sum, item) => item.price * item.quantity,
        0
    );

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                RemoveFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalPrice,
                totalQuantity,
            }}
        >
            {children}

        </CartContext.Provider>
    );
};