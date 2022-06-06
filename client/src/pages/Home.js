import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import HomeWidget from '../components/HomeWidget';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import styled from 'styled-components';

const Container = styled.div`
${mobile({ overflowX: "hidden" })};
`;

const Home = () => {
  return (
    <Container>
        <Navbar />
        <Slider />
        <HomeWidget />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Home