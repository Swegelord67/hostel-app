import React,{useState} from "react";

export const Register = (props)=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" id="name" placeholder="full Name"/>
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)}type="email" placeholder="Your email" id="email" name="email"/>
            <label htmlFor="password">Password</label>
            <input value={password}onChange={(e)=> setPassword(e.target.value)}type="password" placeholder="*********" id="password" name="password"/>
            <button type="submit">Register</button>
            
        </form>
        <button onClick={()=>props.onFormSwitch('login')}>Already have an account? Login Here</button>
        </>
    )
    }