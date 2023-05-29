import React, { useState, useEffect } from "react";
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

const ModalProduct = ({ data, setStatus }) => {

    const [qt, setQt] = useState(1);

    useEffect(() =>{
        setQt(1);
    }, [data])

    const formatCurrency = (value) => {
        if (typeof value !== 'number') {
          return ''; // Retorna uma string vazia se o valor não for um número válido
        }
    
        return value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        });
      };

      const handleCancelButton = () => {
        setStatus(false);
      }

      const handleMinusQt = () => {
        if(qt > 1) {
            setQt(qt - 1)
        }
        if(qt < 1){
            setStatus(false);
        }

      }

      const handlePlusQt = () => {
        setQt(qt + 1)
      }

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
                            <ProductQtImage onClick={handleMinusQt} src="/assets/minus.png"/>
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src="/assets/plus.png"/>
                        </ProductQuantity>
                        <ProductPrice>
                            {formatCurrency(data.price * qt)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton>Adicionar ao carrinho</ProductButton>
            </ProductButtons>
        </Container>
    )
}

export default ModalProduct;