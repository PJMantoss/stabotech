import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`;

const Left = styled.div`
    flex: 1;
    display: inherit;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const Desc = styled.p`
    margin: 20px 0;
    text-aling: justify;
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
  flex-wrap: wrap;
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
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
                <Logo src={'./assets/logo-mini.png'} />

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

                    <SocialIcon color="e60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish List</ListItem>
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