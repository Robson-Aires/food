import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
// import { Tooltip as ReactTooltip } from 'react-tooltip';
import { 
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductPaginationArea,
    ProductPaginationItem
     } from './styled';
import api from '../../api';
import Header from '../../components/Header/index'
import CategoryItem from '../../components/categoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';

let searchTimer = null;

const MyComponent = () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setcategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');

    const getProducts = async () => {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if(prods.error === ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
        }
    }

    useEffect(() => {
        clearTimeout(searchTimer)
        searchTimer = setTimeout(()=>{
                setActiveSearch(headerSearch);
        }, 2000)
    })

    // useEffect(() => {
    //     searchTimer = setTimeout(() => {
            
    //     }, 2000);
    // }, [headerSearch])

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if (cat.error === '') {
                setcategories(cat.result);
            }
        };
        getCategories();
    }, []);

    useEffect(() => {
        setProducts([]);
        getProducts()
    }, [activeCategory, activePage, activeSearch]);

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria
                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                title: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((item, index) => (
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
    {products.length > 0 &&
            <ProductArea>
                <ProductList>
                {products.map((item, index)=>(
                    <ProductItem
                    key={index}
                    data={item}
                    onClick={handleProductClick}
                    />
                ))}
                </ProductList>
            </ProductArea>
            }

            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index)=>(
                        <ProductPaginationItem
                         key={index}
                         active={activePage}
                         current={index + 1}
                         onClick={()=>setActivePage(index+1)}
                         >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus} />
            </Modal>
        </Container>
    );
};

export default MyComponent;