import React from 'react'

const Login = () => {
  return (
    <>
      <div className='login-page'>
        <div className='login-form'>
            <h1 style={{color:"blue"}}>LOGIN</h1>
            <label style={{marginTop:"45px",color:"black",fontWeight:'bold'}}>User Name<input  type="text" style={{marginLeft:"4px"}} placeholder='Email(example@gmail.com)'/></label>
            <label style={{marginTop:"25px",color:"black",fontWeight:'bold'}}>Password<input type="email" style={{marginLeft:"12px"}}  placeholder='Password'/></label>
            <button type="submit" style={{marginTop:"45px",marginBottom:"15px",borderRadius:"5px",width:"100px",backgroundColor:"blue",color:"white",border:"0",height:'40px'}}>LOGIN</button>
        </div>
      </div>
    </>
  )
}

export default Login
