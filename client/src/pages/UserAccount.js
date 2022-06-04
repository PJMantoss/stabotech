import React from 'react'

const UserAccount = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <User>
                    <Image />
                    <Name>Talo Harrison</Name>
                </User>
                <MySabotech>
                    <MyTitle>My SABOTECH</MyTitle>
                    <MyRecommendation>
                        My Recommendations
                    </MyRecommendation>
                    <Favorites>
                        Favorites
                    </Favorites>
                    <SearchInvestors>
                        Searc Investors
                    </SearchInvestors>
                    <SearchStartups>
                        Searc Startups
                    </SearchStartups>
                    <Profile>
                        Create/Edit Profile
                    </Profile>
                </MySabotech>
            </Left>

            <Right></Right>
        </Wrapper>
    </Container>
  )
}

export default UserAccount;