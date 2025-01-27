import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
      })
      .catch((error => alert(error.message)))
      if(auth){
        navigate('/')}
  }
 
  return (
    <div className="login">
      <Link to="/">
        <img 
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form action="">

          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="submit" onClick={signIn} className='login_signInButton'>Sign In</button>

          <p>
            By signing-in you agree to Amazon-Clone's Conditions of Use &Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads
          </p>

          <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
