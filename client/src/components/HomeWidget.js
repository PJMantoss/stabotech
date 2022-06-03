import React from 'react';
import { homeWidgets } from '../data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex: 1;
    width: 350px;
    height: 420px;
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
    font-size: 30px;
    text-transform: capitalize;
`;

const Desc = styled.p`
    font-size: 16px;
`;

const Link = styled.a`
    text-transform: uppercase;
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