import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';

const Container = styled.div`
    margin: 20px auto;
`;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    padding: 20px;
    background: #f1efef;
`;

const Icon = styled.div`
    color: #2982eb;
`;

const Left = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column:
    align-items: flex-start;
`;

const User = styled.div``;

const UserIcon = styled.div``;

const UserName = styled.p``;

const MySabotech = styled.div``;

const MyTitle = styled.h3``;

const Section = styled.div``;

const Right = styled.div`
    flex: 1;
    position: relative;
`;

const CompanySection = styled.div`
    background: #fff;
    padding: 20px 0;
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
`;

const CoyLogo = styled.img`
    width: 150px;
    height: 50px;
`;

const CoyDetail = styled.p``;

const InfoSection = styled.div``;

const Info = styled.p``;

const UserAccount = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <User>
                    <UserIcon>
                        <PersonIcon />
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
                    <Section>
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
    </Container>
  )
}

export default UserAccount;