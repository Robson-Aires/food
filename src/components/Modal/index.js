import React from "react";
import { Container, ModalBody } from "./styled";

const Modal = ({ status, children }) => {
    return (
        <Container status={status}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    )
}

export default Modal