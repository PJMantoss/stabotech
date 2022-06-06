import React from 'react';
import { homeWidgets } from '../data';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex; 
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    ${mobile({ flexDirection: "column" })};
`;

const Card = styled.div`
    flex: 1;
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
`;

const Image = styled.img`
    height: 80%;
    width: 80%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%
`;

const Title = styled.h4`
    font-size: 25px;
    text-transform: capitalize;
`;

const Desc = styled.p`
    font-size: 16px;
`;

const Link = styled.a`
    text-transform: uppercase;
    padding: 8px 12px;
    background: #2982eb;
    color: #fff;
    width: 50%;
    cursor: pointer;

    &:hover{
        background: #fff;
        color: #2982eb;
    }
`;

const HomeWidget = () => {
  return (
    <Container>
        <Wrapper>
            {homeWidgets.map(item => (
                <Card>
                    <Image src={item.image} />
                    <Info>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link>learn more</Link>
                    </Info>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default HomeWidget;