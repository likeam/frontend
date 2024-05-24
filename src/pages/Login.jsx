import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign In</h2>
        <p>Please Login To Continue</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo numquam quod recusandae, corrupti quos alias tempore voluptates aliquid illo nisi eveniet ullam suscipit cum beatae quaerat laudantium possimus labore.
        </p>
        <form> 
          <input 
            type="text" 
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input 
            type="password" 
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <div style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}>
              <p style={{ marginBottom: 0}}> Not Registrd?</p>
              <Link to={"/register"} style={{ textDecoration: "none", color: "#271776ca" }} >
                Rigister Now
                </Link>
            </div>
            <div style={{ justifyContent: "center", alignItems: "center"}}>
              <button type='submit'>Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Login