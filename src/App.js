import React, { useState } from "react";
import SimpleRegisterForm from "./components/SimpleRegisterForm/SimpleRegisterForm.jsx";
import SimpleLoginForm from "./components/SimpleLoginForm/SimpleLoginForm.jsx";
import SimpleLoginFormWithHooks from "./components/SimpleLoginFormWithHooks/SimpleLoginFormWithHooks.jsx";
import './App.css';


function App() {

  const AdminUser = {
    username: 'admin',
    email: "admin@admin.com",
    password: "admin123"
  }
  
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);
  
    if (details.email === AdminUser.email && details.password === AdminUser.password) {
      console.log("Admin logged in successfully");
      setUser({
        username: details.username,
        email: details.email,
      });
    } else {
      setError("Error: invalid credentials");
    }
  }
  
  const Logout = () => {
    console.log("Logout")
    setUser({ name: "", email: "" });
  }

  return (
    <main id="app">
      {/* <SimpleRegisterForm/> */}
      {/* <SimpleLoginForm /> */}

      {(user.email !== "") ? (
        <div className="welcome">
          <h2> Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <SimpleLoginFormWithHooks Login={Login} error={error} />
      )}
    </main>
  );
}

export default App;
