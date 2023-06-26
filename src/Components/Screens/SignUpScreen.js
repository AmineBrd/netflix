import React ,{ useRef } from 'react'
import {auth} from '../../firebaseApp'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'; 
import "./SignUpScreen.css"

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e)=>{
      e.preventDefault();
      createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then((authUser)=>{
          console.log(authUser)
      }).catch(err=>{
        alert(err.message)
      })
  }
  const signIn = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value).then((authUser)=>{
        console.log(authUser);
    }).catch(err=>{
      alert(err.message);
    })
  }
  return (
    <div className='signupScreen'>
        <h1>SignIn</h1>
        <form onSubmit={signIn}>
          <input ref={emailRef}placeholder="Email" type="email" />
          <input ref={passwordRef}placeholder='Password' type="password" />
          <button type='submit'>SignIn</button>
          <h4>
            <span className='signupScreen_gray'>New to Netflix? </span>
            <span className='signUpLink' onClick={register}>Sign Up now.</span>
          </h4>
        </form>
    </div>
  )
}

export default SignInScreen;