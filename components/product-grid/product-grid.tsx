import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from 'components/product/product';
import styles from './product-grid.module.scss';

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/product/products`)
      .then(response => response.json())
      .then(data => setProducts(data.results))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ delay: index * 0.1, duration: 1 }}
        >
          <Product
            title={product.title}
            price={product.price}
            width={product.width}
            length={product.length}
            image={product.image}
            id={product.id}
          />
        </motion.div>
      ))}
    </div>
  );
};
