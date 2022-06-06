import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
`;

const Title = styled.h2`
    font-size: 60px;
    margin-bottom: 20px;
    ${mobile({ fontSize: "40px" })};
`;

const Desc = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 40px;
    border: 1px solid lightgray;
    ${mobile({ width: "75%" })};
`;

const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background: #2982eb;
    color: white;
`;


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates on your favorite companies!</Desc>
        <InputContainer>
            <Input placeholder="Your E-Mail" />
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter