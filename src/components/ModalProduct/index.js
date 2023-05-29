import React from "react";
import {
     Container,
     ProductArea,
     ProductPhoto,
     ProductInfoArea,
     ProductDetails,
     ProductQuantityArea,
     ProductButtons,
     ProductName,
     ProductIngredients,
     ProductButton,
     ProductQuantity,
     ProductQtImage,
     ProductQtText,
     ProductPrice,
     } from "./styled";

const ModalProduct = ({ data }) => {
    const formatCurrency = (value) => {
        if (typeof value !== 'number') {
          return ''; // Retorna uma string vazia se o valor não for um número válido
        }
    
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
      };
    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage src="/assets/minus.png"/>
                            <ProductQtText>9</ProductQtText>
                            <ProductQtImage src="/assets/plus.png"/>
                        </ProductQuantity>
                        <ProductPrice>
                            {formatCurrency(data.price)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true}>Cancelar</ProductButton>
                <ProductButton>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}

export default ModalProduct;