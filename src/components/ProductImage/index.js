import React from 'react'
import './styles.css'

const ProductImage = ({ src }) => {
    return(
        <img className="product" src={src}  />
    );
}

export default ProductImage;