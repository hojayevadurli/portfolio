import React, { useRef, useState } from 'react'

const Auth=()=> {
    const emailInputRef:any=useRef();
    const passwordInputRef:any=useRef();

    const [isLogin, setIsLogin]= useState(true);
    const switchAuthModeHandler=()=>{
      setIsLogin((prevState)=>!prevState);
    };

 const submitHandler=()=>{
        event?.preventDefault();

        const enteredEmail= emailInputRef.current.value;
        const enteredpassword= passwordInputRef.current.value;
        if (isLogin)
        {

        }else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtJAi55otT7yeH-jDEvQFdVw7x68msZ2E'),
            {
                method:'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredpassword
                })
            }
        }

    };
  return (
    <section className="authoriztion">
        <h1>{isLogin ? 'Login' :'Signup '}</h1>
        <form>
            <div className ='class-control'>
                <label htmlFor='email'>Your Email</label>
                <input type='Email' id='email' required ref={emailInputRef}/>                
            </div>
            <div className ='class-control'>
                <label htmlFor='password'>Your Password</label>
                <input type='password' id='password' required ref={passwordInputRef}/>                
            </div>
            <div className ='class-actions'>
                <button>{isLogin ? 'Login': 'Create Account'}</button> 
                <button 
                type='button'         
                className='classes-toggle'
                onClick={switchAuthModeHandler}>
                    {isLogin ? 'create new account': 'Login with existing account'}
                </button>
            </div>
            
        </form>


    </section>

  )
}

export default Auth