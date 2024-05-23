import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const MessageForm = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleMessage = async (event) => {
    event.preventDefault()
    try {
      await axios.post("http://localhost:4000/api/v1/message/send", { firstName, lastName, email, phone, message }, { withCredentials: true, headers: {"Content-Type": "application/json"} } ).then((res) => { toast.success(res.data.message)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setMessage("")  
       }
    )  
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }


  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Send A Message</h2>
        <form onSubmit={handleMessage} >
          <div>
            <input type="text" 
              placeholder='First Name'
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <input type="text" 
            placeholder='last Name'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
              />
          </div>
          <div>
            <input type="email" 
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input type="number" 
            placeholder='Mobile Number'
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <textarea 
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={7}
          />
          <div style={{ justifyContent: "center", alignItems:"center"}}>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default MessageForm