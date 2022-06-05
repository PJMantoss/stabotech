import React from 'react';
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
  ), url("https://i.ibb.co/mcYKhTX/Nairobi-night-skyline-at-dusk.jpg") center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
    margin: 20px 0;
    font-size: 12px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  background: #2982eb;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="company" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I agree to STABOTECH's <b>Terms & Conditions</b>.
          </Agreement>
          <Button>REGISTER</Button>
        </Form>
      </Wrapper>
      <Navbar />
    </Container>
  )
}

export default Register