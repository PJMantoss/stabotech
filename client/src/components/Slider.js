import React, { useState } from 'react';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 40px auto;
    ${mobile({ display: "none" })};
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * - 100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background: #${props=>props.bg}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
    height: 60%;
`;

const Title = styled.h1`
    font-size: 50px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background: transparent;
    color: #2982eb;
    cursor: pointer;
    border: 1px solid #2982eb;

    &:hover{
        background: #2982eb;
        color: #fff;
    }
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.7;
    z-index: 2;
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = direction => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => (
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SEE MORE</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider