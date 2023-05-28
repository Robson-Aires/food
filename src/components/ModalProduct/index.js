import React from "react";
import {
     Container,
     ProductArea,
     ProductPhoto,
     ProductInfoArea,
     ProductDetails,
     ProductQuantityArea,
     ProductButtons
     } from "./styled";

const ModalProduct = () => {
    return(
        <Container>
            <ProductArea>
                <ProductPhoto src="" />
                <ProductInfoArea>
                    <ProductDetails>

                    </ProductDetails>
                    <ProductQuantityArea>

                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    )
}

export default ModalProduct;