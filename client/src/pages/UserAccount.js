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
    width: 60%;
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

const Left = styled.div``;

const User = styled.div``;

const UserIcon = styled.div``;

const UserName = styled.p``;

const MySabotech = styled.div``;

const MyTitle = styled.h3``;

const SectionTitle = styled.div``;

const Right = styled.div``;

const CompanySection = styled.div``;

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
                    <SectionTitle>
                        <Icon>
                            <CheckCircleOutlineIcon/>
                        </Icon>
                        My Recommendations
                    </SectionTitle>

                    <SectionTitle>
                        <Icon>
                            <FavoriteIcon/>
                        </Icon>
                        Favorites
                    </SectionTitle>

                    <SectionTitle>
                        <Icon>
                            <SearchIcon />
                        </Icon>
                         Search Investors
                    </SectionTitle>

                    <SectionTitle>
                        <Icon>
                            <SearchIcon />
                        </Icon>
                        Search Startups
                    </SectionTitle>

                    <SectionTitle>
                        <Icon>
                            <EditIcon />
                        </Icon>
                        Create/Edit Profile
                    </SectionTitle>
                </MySabotech>

            </Left>

            <Right>
                <CompanySection>
                    <SectionTitle>
                        <Icon>
                            <CheckCircleOutlineIcon/>
                        </Icon>
                        Recommended
                    </SectionTitle>

                    <CoyDetail></CoyDetail>
                </CompanySection>

                <InfoSection>
                    <SectionTitle>
                        <Icon>
                            <ArticleIcon />
                        </Icon>
                        Latest Investments
                    </SectionTitle>

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