import React from "react";
import { CartArea, CartHeader, CartIcon, CartText, CartBody, } from "./styled";
import { useSelector } from "react-redux";
import { useState } from "react";

const Cart = () => {
    const products = useSelector(state => state.cart.products);
    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }
    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu carrinho ({products.length})</CartText>
            {show && <CartIcon src="/assets/down.png" />} 
            </CartHeader>
            <CartBody show={show}>
                <div style={{width: 50, height: 300, backgroundColor: 'red', }}></div>
            </CartBody>
        </CartArea>
    )
}

export default Cart;