import React from 'react'

const UserAccount = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <User>
                    <Image></Image>
                    <Name></Name>
                </User>
                <MySabotech>
                    <MyRecommendation></MyRecommendation>
                    <Favorites></Favorites>
                    <SearchInvestors></SearchInvestors>
                    <SearchStartups></SearchStartups>
                </MySabotech>
            </Left>

            <Right></Right>
        </Wrapper>
    </Container>
  )
}

export default UserAccount;