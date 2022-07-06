import React, { Component } from "react";
import "./form.css";

const Form = () => {
    return (
        <div className="form-container">

                <input type="text"placeholder="First name" />

                <input type="text"placeholder="Last name"/>

                <input type="text" placeholder="Email"/>

                <input type="text" placeholder="Password"/>

                <input type="text" placeholder="Re-enter password"/>

            <input type="checkbox"/><span>I accept <a href="#">Terms of Use</a></span>

            <a className="btn btn-primary btn-med register-btn" href="#" role="button">Register</a>
        </div>
    );
};

export default Form;
