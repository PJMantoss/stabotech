import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
  ${mobile({ width: "90%" })};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    ${mobile({ flexDirection: "column", padding: "7px 10px" })};
`;

const Left = styled.div`
    flex: 1;
    display: inherit;
    flex-direction: column;
    align-items: center;
    ${mobile({justifyContent: "center", width: "90%" })};
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const Desc = styled.p`
    margin: 20px 0;
    text-align: justify;
`;

const SocialContainer = styled.div`
  display: inherit;
`;

const SocialIcon = styled.div`
  display: inherit;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #${props => props.color};
  color: white;
  margin-right: 20px;
`;

const WhatWeDo = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

const CompanyInfo = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  text-align: left;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: 'pointer';
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: 5px;
  text-align: left;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to="/" style={{textDecoration: "none"}}>
                  <Logo src={'./assets/logo-mini.png'} />
                </Link>

                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin suscipit libero massa, ut ullamcorper mi tempor ut. Maecenas vel odio sapien. 
                Suspendisse potenti. Duis viverra elit sed tellus cursus bibendum.
                </Desc>

                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <FacebookIcon />
                    </SocialIcon>

                    <SocialIcon color="e4405f">
                        <InstagramIcon />
                    </SocialIcon >

                    <SocialIcon color="55acee">
                        <TwitterIcon />
                    </SocialIcon>

                    <SocialIcon color="2982eb">
                        <LinkedInIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <WhatWeDo>
                <Title>What We Do</Title>
                <List>
                    <ListItem>Fund Raising</ListItem>
                    <ListItem>Deal Sourcing</ListItem>
                    <ListItem>Market Research</ListItem>
                    <ListItem>GTM Strategy</ListItem>
                    <ListItem>Market Intelligence</ListItem>
                </List>
            </WhatWeDo>

            <CompanyInfo>
                <Title>Company</Title>
                <List>
                    <ListItem>About Us</ListItem>
                    <ListItem>Services</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Contact Us</ListItem>
                </List>
            </CompanyInfo>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>STABOTECH Pro</ListItem>
                    <ListItem>Register</ListItem>
                    <ListItem>Find Investors</ListItem>
                    <Link to="/useraccount" style={{textDecoration: "none"}}>
                      <ListItem>My STABOTECH</ListItem>
                    </Link>
                    
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem><LocationOnIcon style={{marginRight: "10px"}} /> 644 Ruff Path, Nairobi, Kenya</ContactItem>
                <ContactItem><LocalPhoneIcon style={{marginRight: "10px"}} />+254 607 777 8888</ContactItem>
                <ContactItem><EmailIcon style={{marginRight: "10px"}} />info@stabotech.com</ContactItem>

                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Wrapper>
    </Container>

  )
}

export default Footer