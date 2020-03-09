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
    height: 300px;
    margin-bottom: 25px;
    margin: 5px;
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
    max-width: 200px; 
    cursor: pointer;
    align-self: center;
    height: 200px;
`;

const ProductCard =  props => {
    let { products, filter, status } = props;

    const [list, setList] = React.useState({
        pd: products
    })
    
    let initialProducts = products;

    useEffect(() => {
        const p = Array.from(filter).reduce((a, v, i) => `${a}[^${filter.substr(i)}]*?${v}`, '')
        const re = RegExp(p)
        setList({
            pd: products.filter(p => p.name.match(re))
        })
    }, [filter, products])

    useEffect(() => {
        console.log(status)
        let prods = [...list.pd]
        if (status) {
            prods.sort((a, b) => {
                return b.price - a.price
            })
            setList({
                pd: prods
            })
        } else {
            setList({
                pd: initialProducts
            })
        }
    }, [status])


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