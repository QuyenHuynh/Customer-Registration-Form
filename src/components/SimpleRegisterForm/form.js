import React, { Component } from "react";
import "./form.css";

const Form = () => {
    return (
        <div className="form-container">
            <h2 id="title">Register an Account</h2>

            <div className="text-input-container">
                <input type="text" className="name" placeholder="First name" />
                <input type="text" className="name" placeholder="Last name" />
                <input type="text" className="email" placeholder="Email" />
                <input type="text" className="password" placeholder="Password" />
                <input type="text" className="password" placeholder="Re-enter password" />
            </div>

            <div className="checkbox-input-container">
                <input type="checkbox" /><span id="use-terms">I accept <a href="#">Terms of Use</a></span>
            </div>

            {/* Note to turn a hrefs into router links*/}
            <div className="button-container">
                <a className="btn btn-med register-btn" href="#" role="button">Register</a>
            </div>
        </div>
    );
};

export default Form;
