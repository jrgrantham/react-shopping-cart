import React, { useContext } from 'react';
import ProductContext from '../contexts/ProductContext'

// Components
import Product from './Product';

const Products = () => {
	const { products, addItem } = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map((product, index) => (
				<Product
					key={`${product.id} ${index}`}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
