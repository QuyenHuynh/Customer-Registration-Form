import React, { Component } from "react";
import "./form.css";

const Form = () => {
    return (
        <div className="form-container">

                <input type="text" className="name" placeholder="First name" />

                <input type="text" className="name" placeholder="Last name"/>

                <input type="text" className="email" placeholder="Email"/>

                <input type="text" className="password" placeholder="Password"/>

                <input type="text" className="password" placeholder="Re-enter password"/>

                <input type="checkbox"/><span>I accept <a href="#">Terms of Use</a></span>

            <a className="btn btn-primary btn-med register-btn" href="#" role="button">Register</a>
        </div>
    );
};

export default Form;
