import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ), url("https://i.ibb.co/s2fWR6x/lagos-skyline.jpg") center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background: #2982eb;
  padding: 15px 20px;
  margin: 10px 0;
  color: white;
  cursor: pointer;
  &:disabled{
    color: blue;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
    color: red;
`;

const Link = styled.a`
  font-size: 12px;
  margin: 5px 0;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
              placeholder="email"
          />
          <Input 
              placeholder="password" 
              type="password"
          />
          <Button>SIGN IN</Button>
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <Navbar />
    </Container>
  )
}

export default Login;