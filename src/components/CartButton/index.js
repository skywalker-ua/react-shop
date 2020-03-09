import React from 'react'
import {
    Button
} from '@material-ui/core'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const AddToCart = styled(Button)`
    
    background-color: #00A046;
    width: 40px;
    padding: 5px;
    color: white;
    &: hover {
        background-color: #00cc58;
    }
`;

const CartButton = () => {
    return(
        <AddToCart
         startIcon={<ShoppingCartIcon />} >
            Buy
        </AddToCart>
    );
};

export default CartButton;