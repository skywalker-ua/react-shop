import React, { useEffect } from 'react'
import {
    Paper,
    Typography
 } from '@material-ui/core';
import styled from 'styled-components'
import './styles.css'
const CardSurface = styled(Paper)`
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    min-height: 300px;
    margin-bottom: 25px;
    margin: 1px;
`;

const ProductTitle = styled(Typography)`
    cursor: pointer;
    padding: 5px;
    &:hover {
        color: #fb3f4c;
        text-decoration: underline;
    }
`;

const ProductImage = styled.img`
    height: 200px;
    max-width: 200px; 
    cursor: pointer;
    align-self: center;
`;

const ProductCard =  props => {
    let { products, filter } = props;

    const [list, setList] = React.useState({
        pd: products
    })
    
    useEffect(() => {
        const p = Array.from(filter).reduce((a, v, i) => `${a}[^${filter.substr(i)}]*?${v}`, '')
        const re = RegExp(p)
        setList({
            pd: products.filter(p => p.name.match(re))
        })
        console.log(list.pd)
        console.log(products)
    }, [filter, products])


    return(
        <div className="products-grid">
            { list.pd.map(product => (
                <CardSurface key={product.id}>
                    <ProductImage src={product.image} />
                    <ProductTitle variant="subtitle1" >
                        {product.name}
                    </ProductTitle>
                    <div className="product-price">
                        {product.price + ' ₴'}
                    </div>
                </CardSurface>
            ))}
        </div>
    );
}

export default ProductCard;