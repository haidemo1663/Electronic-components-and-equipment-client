import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email: "", password: ""
    })
    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const loginSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/user/login', { ...user })
            localStorage.setItem('firstLogin', true)
            window.location.href = '/'
        } catch (error) {
            //console.log(error.response);
            alert(error.response.data.msg)
        }
    }
    return (
        <div className='login-page'>
            <form onSubmit={loginSubmit}>
                <h2 style={{ "textAlign": "center" }}>Login</h2>
                <label name="email" htmlFor="email">Email:</label>
                <input id="email" type='email' name='email' required placeholder='Enter Your Email...' value={user.email} onChange={onChangeInput} />
                <label name="password" htmlFor="password">Password:</label>
                <input id="password" type='password' name='password' required placeholder='Enter Your Password...' value={user.password} onChange={onChangeInput} />
                <div className='row-auth'>
                    <button type='submit'>Login</button>
                    <small> Register Without Account </small>
                    <Link to='/register'>
                        <button className="register">Register</button></Link>
                </div>
            </form>
        </div>
    );
}

export default Login;