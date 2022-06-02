import React from 'react';
import { HomeWidgets } from '../data';
import styled from 'styled-components';
import { Title } from '@mui/icons-material';

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
    height: 70%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%
    height: 100%;
`;

const Title = styled.h4`
    font-size: 20px;
`;

const Desc = styled.p`
    font-size: 16px;
`;

const Link = styled.a``;

const HomeWidgets = () => {
  return (
    <Container>
        <Wrapper>
            {HomeWidgets.map(item => (
                <Card>
                    <Image src={item.image} />
                    <Info>
                        <Title></Title>
                        <Desc></Desc>
                        <Link>learn more</Link>
                    </Info>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default HomeWidgets;