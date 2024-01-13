import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from 'components/product/product';
import { DropdownFilter } from 'components/dropdown-filter';
import styles from './product-grid.module.scss';

export const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('A - Z'); // default value

  const handleFilterChange = (filter: any) => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    let queryParam = '';
    switch (selectedFilter) {
      case 'A - Z':
        queryParam = 'ordering=title'
        break;
      case 'Price Increasing':
        queryParam = 'ordering=price';
        break;
      case 'Price Decreasing':
        queryParam = 'ordering=-price';
        break;
      case 'Recently Added':
        queryParam = 'ordering=-created_at';
        break;
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/product/products?${queryParam}`)
      .then(response => response.json())
      .then(data => setProducts(data.results))
      .catch(error => console.error('Error fetching data: ', error));
  }, [selectedFilter]);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className={styles.container}>
      <DropdownFilter 
        options={['A - Z', 'Price Increasing', 'Price Decreasing', 'Recently Added']}
        onFilterChange={handleFilterChange}
      />
      <div className={styles.gridContainer}>
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
              on_hold={product.onHold}
              is_sold={product.isSold}
            />
          </motion.div>
        ))}
        </div>
    </div>
  );
};
