import React from "react";
import { Container,ProductPhoto, ProductName, ProductPrice, ProductButtonArea, ProductButton,
     ProductIngredients, ProductPhotoArea, ProductInfoArea } from './styled';

const productItem = ({ data, onClick }) => {
    const handleClick = () => {
        onClick(data);
    }

    return (
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <ProductPhoto src={ data.image } />
            </ProductPhotoArea>
            <ProductInfoArea>
            <ProductName>{data.name}</ProductName>
            <ProductPrice>{data.price}g</ProductPrice>
            <ProductIngredients>{data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png" />
            </ProductButtonArea>
        </Container>
    )
}

export default productItem