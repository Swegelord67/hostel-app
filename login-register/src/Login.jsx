import React,{useState} from "react";
export const Login = (props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="auth-form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}type="email" placeholder="Your email" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={password}onChange={(e)=> setPassword(e.target.value)}type="password" placeholder="*********" id="password" name="password"/>
            <button type="submit">Login</button>
            
        </form>
        <button onClick={()=>props.onFormSwitch('Register')}>Don`t have an account? Register Here</button>
        </div>
    )
    }