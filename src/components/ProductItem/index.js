import React from "react";
import { Container,ProductPhoto, ProductName, ProductPrice, ProductButtonArea, ProductButton,
     ProductIngredients, ProductPhotoArea, ProductInfoArea } from './styled';

const productItem = ({ data }) => {
    return (
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={ data.image } />
            </ProductPhotoArea>
            <ProductInfoArea>
            <ProductName>{data.name}</ProductName>
            <ProductPrice>{data.price}</ProductPrice>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    )
}

export default productItem