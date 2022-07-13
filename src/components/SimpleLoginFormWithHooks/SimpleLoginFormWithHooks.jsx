import React, { useState } from 'react'
import './SimpleLoginFormWithHooks.css';

const SimpleLoginFormWithHooks = ({ Login, error }) => {

    const [details, setDetails] = useState({ username: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler} className="form-container">
            <h2 id="title">Sign in</h2>

            {(error !== "") ? (<div className="error-message">{error}</div>) : ""}

            <div className="text-input-container">
                <input type="text" className="username" placeholder="Username" name="username" id="username" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required/>
                <input type="email" className="email" placeholder="Email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required/>
                <input type="text" className="password" placeholder="Password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} required/>
            </div>

            <div className="button-container">
                <input type="submit" className="btn" value="Sign in" />
            </div>
        </form>
    )
}

export default SimpleLoginFormWithHooks