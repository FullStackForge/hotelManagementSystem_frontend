'use client'
import { useState } from "react"

export default function Page(){
  const [successMessage, setSuccessMessage] = useState(false)
  const [errMessage, setErrMessage] = useState('')
  async function handleForm(formData){
    console.log(formData);
    const fd={
      'first_name':formData.get('first_name'),
      'last_name':formData.get('last_name'),
      'username':formData.get('username'),
      'password':formData.get('password'),
      'email':formData.get('email'),
      'profile':{
        'mobile':formData.get('mobile')
      }
    }
    const res = await fetch('http://127.0.0.1:8000/api/signup',{
      'method':'POST',
      'body' : JSON.stringify(fd),
      'headers':{
        'Content-Type':'application/json'
      }
    })
    const resData = await res.json()

    if(res.ok){
      console.log('ok',resData);
      setSuccessMessage(true)
      setErrMessage('')
    }else{
      var errorStr = ''
      for(const [key,values] of Object.entries(resData)){
        for(let i=0; i<values.length;i++){
          errorStr += values[i]
          
        }
      }
      console.log(errorStr);
      
      setErrMessage(errorStr)
      setSuccessMessage(false)
      console.log(resData);

    }
  }
  return (
    <div>
      {
        successMessage && <div>
          I am created
        </div>
      }
      {
        errMessage && <div>
          {errMessage}
        </div>
      }
      <p className="text-2xl"> I am signup Page</p>
      <div className="form">
        <form action={handleForm}>
            <div className="m-2">
                <label htmlFor="">First Name: </label>
                <input type="text" name="first_name"/>
            </div>
            <div className="m-2">
                <label htmlFor="">Last Name: </label>
                <input type="text" name="last_name"/>
            </div>
            <div className="m-2">
                <label htmlFor="">UserName: </label>
                <input type="text" name="username"/>
            </div>
            <div className="m-2">
                <label htmlFor="">Email: </label>
                <input type="email" name="email"/>
            </div>
            <div className="m-2">
                <label htmlFor="">Password: </label>
                <input type="password" name="password" />
            </div>
            <div className="m-2">
                <label htmlFor="">Mobile: </label>
                <input type="number" name="mobile" />
            </div>
            <div>
              <button>submit</button>
            </div>
            <a href="/signin" className="m-4">SignIn</a>
        </form>
      </div>
    </div>

  );
}
