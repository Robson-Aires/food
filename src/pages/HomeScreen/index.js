import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import { Container } from './styled';
import api from '../../api';
import Header from '../../components/Header/index'


export default () => {
    // const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    useEffect(() => {
        const getCategories = async () => {
        const categories = await api.getCategories();
        console.log(categories.result);
        }
        getCategories();
    }, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
        </Container>
    );
}