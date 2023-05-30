import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Login(props) {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const new_value=(name==="email")? value.toLowerCase(): value;
        console.log(name, value);

        setData((prev) => {
            return {
                ...prev,
                [name]: new_value
            }
        })

    }

    const handleForm = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <div className='header'>
            <form onSubmit={handleForm}>
                <label htmlFor="">Enter Email: &nbsp;</label>
                <input type="email" placeholder='Email' className='form-control' name='email' value={data.email} onChange={handleChange} />
                <br />
                <label htmlFor="">Enter Password: &nbsp;</label>
                <input type="password" placeholder='Password' className='form-control' name='password' value={data.password} onChange={handleChange} />
                <br /><br />
                <input type="submit" value="Login" className='form-control bg-black text-white' />
            </form>
        </div>
    );
}

export default Login;