import { useRef, useState } from 'react'




function MainPage (){

    const emailInputRef = useRef(null)
    const passwordInputRef = useRef(null)

    const [showSignUp, setShowSignUp] = useState(false)

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log(emailInputRef.current.value);
        console.log(passwordInputRef.current.value);

        if(emailInputRef.current.value === ""){
            emailInputRef.current.focus();
            return;
        }
        if (passwordInputRef.current.value === ""){
            passwordInputRef.current.focus();
            return;
        }

       
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(emailInputRef.current.value);
        console.log(passwordInputRef.current.value);

        if(emailInputRef.current.value === ""){
            emailInputRef.current.focus();
            return;
        }
        if (passwordInputRef.current.value === ""){
            passwordInputRef.current.focus();
            return;
        }

       
    }


    return  (
        <main>
            <h1> Main Page </h1>
            { !showSignUp ? (

            <div>
                <h3>SignIn</h3>
                <form  onSubmit={handleSignIn} style={{ display: 'flex', flexDirection:'column', padding: '10px' }} >
                    <label htmlFor='email' >Email</label>
                    <input ref={emailInputRef}  name="email" id='email' type="text" placeholder='Email' />

                    <label htmlFor='password' >password</label>
                    <input ref={passwordInputRef} name="password" id='password' type="text"/>

                    <button type="submit"> SignIn </button>
                </form> 
                <span> Dont have an account? </span> <button onClick={()=> setShowSignUp(!showSignUp)} >Sign Up</button>
            </div> 
            
            ):( 

            <div>
            <h3>SignUP</h3>
                <form  onSubmit={handleSignUp} style={{ display: 'flex', flexDirection:'column', padding: '10px' }} >
                    <label htmlFor='email' >Email</label>
                    <input ref={emailInputRef}  name="email" id='email' type="text" placeholder='Email' />

                    <label htmlFor='password' >password</label>
                    <input ref={passwordInputRef} name="password" id='password' type="text"/>

                    <button type="submit"> SignUp </button>
                </form> 
                <span> Already have an account? </span> <button onClick={()=> setShowSignUp(!showSignUp)} >Sign In</button>

            </div>
            
            )}
        </main>
    )
}



export default MainPage;