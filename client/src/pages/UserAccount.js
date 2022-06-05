import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
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
`;

const Left = styled.div``;

const User = styled.div``;

const UserIcon = styled.div``;

const UserName = styled.p``;

const MySabotech = styled.div``;

const MyTitle = styled.h3``;

const SectionTitle = styled.h5``;

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
                        <CheckCircleOutlineIcon/>My Recommendations
                    </SectionTitle>
                    <SectionTitle>
                        <FavoriteIcon/>Favorites
                    </SectionTitle>
                    <SectionTitle>
                        <SearchIcon /> Search Investors
                    </SectionTitle>
                    <SectionTitle>
                        <SearchIcon /> Search Startups
                    </SectionTitle>
                    <SectionTitle>
                        Create/Edit Profile
                    </SectionTitle>
                </MySabotech>
            </Left>

            <Right>
                <CompanySection>
                    <SetionTitle>Recommendations</SetionTitle>
                    <CoyDetail></CoyDetail>
                </CompanySection>
                <InfoSection>
                    <SetionTitle>Latest Investments</SetionTitle>
                    <Info></Info>
                </InfoSection>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default UserAccount;