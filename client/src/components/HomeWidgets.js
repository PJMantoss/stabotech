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
    width: 95%;
    height: 75%;
`;

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
                        <Button>learn more</Button>
                    </Info>
                </Card>
            ))}
        </Wrapper>
    </Container>
  )
}

export default HomeWidgets;