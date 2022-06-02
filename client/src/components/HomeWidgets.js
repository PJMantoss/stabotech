import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
`;

const HomeWidgets = () => {
  return (
    <Container>
        <Image src={product.gallery[0]} alt={product.name} />
        <PrdouctInfo>
            <Icon>
                <ShoppingCartOutlinedIcon style={{width:"20px", height:"20px"}} />
            </Icon>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>
                ${productPrice}
            </ProductPrice>
        </PrdouctInfo>
    </Container>
  )
}

export default HomeWidgets;