import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Newsletter from '../components/Newsletter';
import HomeWidget from '../components/HomeWidget';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div``;

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