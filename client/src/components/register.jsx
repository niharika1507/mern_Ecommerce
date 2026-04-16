
import React from 'react'
import API from '../api/axios'
export default function Register() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [mobile, setMobile] = React.useState("")
    function handleRegister(e) {
        e.preventDefault()
        API.post('/register', { name, email, password, mobile:Number })

            .then((res) => {
                console.log(res.data)
                if(res.status === 201){
                    alert("User created successfully")
                }
            })
            .catch(err => console.log(err))
    }
  return (
    <div className ='container'>
        <div className='row'>
            <form className='col-12 col-md-6'>
                <div className = 'mb-3'>
                <h1>Register</h1>
                </div>
                <div className = 'mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type='text' 
                    className="form-control"
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className = 'mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input type='email' 
                    className="form-control"
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className = 'mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' 
                    className="form-control"
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className = 'mb-3'>
                    <label htmlFor='mobile' className='form-label'>Mobile</label>
                    <input type='text' 
                    className="form-control"
                    onChange={(e)=>setMobile(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Register</button>
            </form>
        </div>
    </div>
    
  )
}
