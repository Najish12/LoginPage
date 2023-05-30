import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function LoginPage(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [checked, setChecked] = useState(false)
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleEmail = (e) => {
        let email = e.target.value;

        if (!email.match(emailRegex)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        setEmail(email)
    }

    const handlePassword = (e) => {
        let password = e.target.value
        if (password.length < 4) {
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
        }
        setPassword(password)
    }

    const handleChecked=(e)=>{
        setChecked(e.target.checked);
        console.log(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let email = e.target[0].value;

        if (!email.match(emailRegex)) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }

        let password = e.target[1].value
        if (password.length < 4) {
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
        }

        if(email.match(emailRegex) && (!password.length < 4) ){
            alert("Form has been Submited...")
        }
        console.log(e)

    }
    return (
        <div className='header'>
            <h1>Welcome</h1>
            <p style={{ color: "grey" }}>please enter login details</p>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="email" name='email' value={email} className="form-control" placeholder='Email' onChange={handleEmail} required />

                    {emailError ? <span style={{ color: "red" }}>Invalid email</span> : ""}
                </div>
                <div>
                    <input type="text" name='password' value={password} className="form-control mt-3" placeholder='Passwod' onChange={handlePassword} required />
                    <br />
                    {passwordError ? <span style={{ color: "red" }}>password length greater than 3 char</span> : ""}
                </div>
                <div className='main-label'>
                    <input type="checkbox" id="check" className='custom-control custom-checkbox' checked={checked} onChange={handleChecked} />
                    <label htmlFor="check" className='custom-input-label ms-2 ' >
                        Remember me
                    </label>
                </div>
                <input type="submit" value="Login" className='button' />

            </form>
        </div>
    );
}

export default LoginPage;