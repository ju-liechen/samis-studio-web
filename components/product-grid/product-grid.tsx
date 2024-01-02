import React, { useEffect, useState } from 'react';
import { Product } from 'components/product/product'

import styles from './product-grid.module.scss'

export const ProductGrid = ({ }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/product/products`)
      .then(response => response.json())
      .then(data => setProducts(data.results))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);
  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <div key={product.id}>
          <Product
            title={product.title}
            price={product.price}
            width={product.width}
            length={product.length}
            image={product.image}
            id={product.id}
          />
        </div>
      ))}
    </div>
  )
}
