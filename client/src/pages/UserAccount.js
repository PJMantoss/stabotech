import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { mobile } from '../responsive';

import styled from 'styled-components';

const Container = styled.div`
    margin: 20px auto;
`;

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 70px auto;
    padding: 20px;
    background: #f1efef;
    ${mobile({ 
        width: "70%", 
        margin: "40px auto", 
        flexDirection: "column", 
        justifyContent: "center" 
    })};
`;

const Icon = styled.div`
    color: #2982eb;
    margin-right: 10px;
`;

const Left = styled.div`
    flex: 1;
    display: block;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;;
`;

const UserIcon = styled.div`
    display: flex;
    align-items: center;
    justify: content: center;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    margin-right: 5px;
`;

const UserName = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: #2982eb;
`;

const MySabotech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const MyTitle = styled.h3``;

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CompanySection = styled.div`
    width: 100%;
    background: #fff;
    padding: 20px 0;
    margin-bottom: 20px;
    ${mobile({ marginTop: "20px" })};
`;

const FollowBtn = styled.button`
    background: #2982eb;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 22px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
`;

const CoyLogo = styled.img`
    width: 150px;
    height: 50px;
    margin-top: 20px;
`;

const CoyDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Info = styled.p`
    text-align: justify;
`;

const UserAccount = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
            <Left>
                <User>
                    <UserIcon>
                        <PersonIcon style={{width: "60px", height:"60px", color:"#2982eb"}} />
                    </UserIcon>
                    <UserName>Talo Harrison</UserName>
                </User>

                <MySabotech>
                    <MyTitle>My SABOTECH</MyTitle>
                    <Section>
                        <Icon>
                            <CheckCircleOutlineIcon/>
                        </Icon>
                        My Recommendations
                    </Section>

                    <Section>
                        <Icon>
                            <FavoriteIcon/>
                        </Icon>
                        Favorites
                    </Section>

                    <Section>
                        <Icon>
                            <SearchIcon />
                        </Icon>
                         Search Investors
                    </Section>

                    <Section>
                        <Icon>
                            <SearchIcon />
                        </Icon>
                        Search Startups
                    </Section>

                    <Section>
                        <Icon>
                            <EditIcon />
                        </Icon>
                        Create/Edit Profile
                    </Section>
                </MySabotech>

            </Left>

            <Right>
                <CompanySection>
                    <Section >
                        <Icon>
                            <CheckCircleOutlineIcon/>
                        </Icon>
                        Recommended
                    </Section>

                    <CoyDetail>
                        <CoyLogo src={'./assets/twiga-logo.png'} />
                        <FollowBtn>follow</FollowBtn>
                    </CoyDetail>
                </CompanySection>

                <InfoSection>
                    <Section>
                        <Icon>
                            <ArticleIcon />
                        </Icon>
                        Latest Investments
                    </Section>

                    <Info>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec eget est quis justo sollicitudin elementum. 
                    Aenean sodales ultrices velit nec mollis.</Info>
                </InfoSection>
            </Right>

        </Wrapper>
        <Footer />
    </Container>
  )
}

export default UserAccount;