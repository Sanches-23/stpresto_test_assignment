import React from "react"
import {Link} from "react-router-dom";
import {Product} from "src/API/types/Product";
import {Button, Typography} from "@mui/material";

type ProductCardProps = {
    product: Product;
    onAddToCartClick: () => void;
}

export const ProductItems: React.FC<ProductCardProps> = ({product, onAddToCartClick}) => {
    return (
        <div>
            <div key={product.id}>
                <img src={product.image} alt={product.title} style={{width: '30px', height: '30px'}}/>
                <Link to={`/products/${product.id}`}>
                    <Typography variant="h6">{product.title}</Typography>
                </Link>
                <Typography variant="overline">Category: {product.category}</Typography>
                <Typography variant="body1">Price: ${product.price}</Typography>
                <Button variant="contained" color="primary"  onClick={onAddToCartClick}>Add to Cart</Button>
                <hr/>
            </div>
        </div>
    );
};

export default ProductItems;
