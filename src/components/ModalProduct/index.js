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

const ModalProduct = ({ data }) => {
    return(
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        {data.name}
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