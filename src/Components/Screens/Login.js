import React,{useState} from 'react'
import SignUpScreen from './SignUpScreen';
import './Login.css'

export default function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
      <div className='loginScreen_background'>
        <img className="loginScreen_logo"
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
        <button className='loginScreen_button' onClick={()=>setSignIn(true)}>Sign In</button>
        <div className='loginScreen_gradient'/>
        <div className="loginScreen_body">
        {signIn ? (<SignUpScreen />)
        :(  
          
            <>
              <h1>Unlimited films, Tv programmes and more</h1>
              <h2>Watch anywhere .Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your membership
              </h3>
              <div className="loginScreen_input">
                <form >
                  <input type='email' placeholder='Email Adress'/>
                  <button onClick={()=>setSignIn(true)}>LETS START</button>
                </form>
              </div>
            </>
        )}
        </div>
      </div>
    </div>
        )
}
