import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';
import api from '../../api';
import Header from '../../components/Header/index'
import CategoryItem from '../../components/categoryItem';


export default () => {
    // const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setcategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const getCategories = async () => {
        const cat = await api.getCategories();
        if(cat.error === '') {
            setcategories(cat.result)
        }
        }
        getCategories();
    }, []);

    useEffect(()=>{

    }, [activeCategory])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
            <CategoryArea>
                Selecione uma categoria
              <CategoryList>
                <CategoryItem
                 data={
                    {id:0,
                    title: 'Todas as categorias',
                    image: '/assets/food-and-restaurant.png'
                    }}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                     />
                     {categories.map((item, index) =>(
                        <CategoryItem
                         key={index}
                         data={item}
                         activeCategory={activeCategory}
                         setActiveCategory={setActiveCategory}
                         />
                     ))}
              </CategoryList>
            </CategoryArea>
            }
        </Container>
    );
}