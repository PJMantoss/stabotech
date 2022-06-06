import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ 
        position: "relative", 
        height: "auto", 
        width:"90%", 
        overflowX: "hidden" 
    })};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    ${mobile({ flexDirection: "column", padding: "8px 0px", width:"100%" })};
`;

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })};
`;

const Left = styled.div`
    text-align: center;
    flex: 1;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ justifyContent: "center", alignItems: "center" })};
`;

const Logo = styled.img`
    width: 85px;
    height: 85px;
    ${mobile({ width: "80px", height: "85px" })};
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 2;
    ${mobile({ flexDirection: "column", justifyContent: "center", marginTop: "10px" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    text-transform: uppercase;
    ${mobile({ fontSize: "12px", marginBottom: "10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
              <Link to="/" style={{textDecoration: "none"}}>
                <Logo src={process.env.PUBLIC_URL + "./assets/logo-mini.png"} />
              </Link>
          </Left>
          <Center>
          <Language>EN</Language>
              <SearchContainer>
                  <Input placeholder="Search" />
                <SearchIcon style={{color:"gray", fontSize:16}} />
              </SearchContainer>
          </Center>
          <Right>
                <MenuItem>about</MenuItem>
                <MenuItem>startups</MenuItem>
                <MenuItem>investors</MenuItem>
                
                <MenuItem>contact</MenuItem>
                <Link to="/register" style={{textDecoration: "none"}}>
                    <MenuItem>register</MenuItem>
                </Link>
                
                <Link to="/login" style={{textDecoration: "none"}}>
                    <MenuItem>sign in</MenuItem>
                </Link>
                
          </Right>
      </Wrapper>
  </Container>
  )
}

export default Navbar