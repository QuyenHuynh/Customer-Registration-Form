import React from "react";
import "./SimpleLoginForm.css";

const SimpleLoginForm = () => {
    return (
        <div className="form-container">
            <h2 id="title">Sign in</h2>

            <div className="text-input-container">
                <input type="text" className="username" placeholder="Username" />
                <input type="text" className="password" placeholder="Password" />
            </div>

            {/* Note to turn a hrefs into router links*/}
            <div className="button-container">
                <a className="btn btn-med register-btn" href="#" role="button">Sign in</a>
            </div>
        </div>
    );
};

export default SimpleLoginForm;