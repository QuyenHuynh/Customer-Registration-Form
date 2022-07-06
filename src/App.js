import React, { Component } from "react";
import Form from "./components/Form";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
  <Wrapper>
    <Header> <i class="fa-solid fa-circle-user"></i> Sign Up</Header>
      <Form></Form>
  </Wrapper>
  );
}

export default App;
