import React, {Component} from "react";
import "./form.css";

const Form = () => {
    return  (
        <div className="form-container">

        <div className="input-wrapper">
            <label htmlFor="FirstName"><i className="fa fa-user" aria-hidden="true"></i> First name: </label>
            <input type="text" name="FirstName" id="FirstName"/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="LastName"><i className="fa fa-user" aria-hidden="true"></i> Last name:</label>
            <input type="text" name="LastName" id="LastName"/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="email"><i className="fa fa-envelope-o" aria-hidden="true"></i> Email:</label>
            <input type="text" name="email" id="email"/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="email"><i className="fa fa-key" aria-hidden="true"></i> Password:</label>
            <input type="text" name="password" id="password"/>
        </div>

        <div className="input-wrapper">
            <label htmlFor="email"><i className="fa fa-repeat" aria-hidden="true"></i> Re-type password:</label>
            <input type="text" name="repassword" id="repassword"/>
        </div>

        <a className="btn btn-primary btn-med" href="#" role="button">Create your account</a>
        </div>
    );
};

export default Form;
