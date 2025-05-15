import React from 'react'
import './Contect.css'

const Contect = () => {
  return (
    <div>
      <div className="Login-Page">
 <div className="Page">
  <h1>Login to Your Account</h1>
  <label htmlFor="" className='label1' required>Email</label>
  <input type="email" />
  <label htmlFor="" type="password" className='label2' required >Password</label>
  <input type="Number" />
  <div className='Check2'>
    <div style={{display:"flex"}}>
    <input type="checkbox" className='cbox'/>
      <p>Remind me</p>
      </div>
      <div>
      <a href="http://">Forgot Password?</a>
      </div>
  </div>
  <button className='btn'>Login</button>
 </div>
 
      </div>
    </div>
  )
}

export default Contect
