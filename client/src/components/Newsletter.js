import React from 'react';
import SendIcon from '@mui/icons-material/Send';

import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fcf5f5;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
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
    ${mobile({ width: "80%" })};
`;

const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background: teal;
    color: white;
`;


const Newsletter = () => {
  return (
    <div>Newsletter</div>
  )
}

export default Newsletter