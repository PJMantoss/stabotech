import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div``;

const Right = styled.div``;

const UserAccount = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <User>
                    <Image />
                    <UserName>Talo Harrison</UserName>
                </User>
                <MySabotech>
                    <MyTitle>My SABOTECH</MyTitle>
                    <SetionTitle></SetionTitle>
                        My Recommendations
                    <SetionTitle></SetionTitle>
                    <SetionTitle>
                        Favorites
                    </SetionTitle>
                    <SetionTitle>
                        Search Investors
                    </SetionTitle>
                    <SetionTitle>
                        Search Startups
                    </SetionTitle>
                    <SetionTitle>
                        Create/Edit Profile
                    </SetionTitle>
                </MySabotech>
            </Left>

            <Right>
                <CompanySection>
                    <SetionTitle></SetionTitle>
                    <CoyDetail></CoyDetail>
                </CompanySection>
                <InfoSection>
                    <SetionTitle></SetionTitle>
                    <Info></Info>
                </InfoSection>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default UserAccount;