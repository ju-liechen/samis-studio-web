import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BasicLayout } from 'components/layouts/basic-layout'
import styles from './product-detail.module.scss'


const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  useEffect(() => {
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/product/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  return (
    <BasicLayout>
      <div className={styles.outerContainer}>
        {product && (
          <motion.div
          key="mainContainer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 1 }}
          className={styles.mainContainer}
        >
            <div className={styles.innerContainer}>
              <div className={styles.productImageContainer}>
                <button className={styles.backButton} onClick={() => router.push('/products')}> <p>Back</p> </button>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
              </div>
              <div className={styles.productDetails}>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.dimensions}>{product.width} " x {product.length} "</div>
                <div className={styles.price}>${product.price} CAD</div>
                {
                  product.onHold ? (
                    <p className={styles.holdText}>Product is currently on hold. Please check again later!</p>
                  ) : product.isSold ? (
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <p className={styles.soldText}>Product is sold out, sorry!</p>
                      <p>Check out the commissions page if you'd like to request another</p>
                    </div>
                  ) : (
                    <button className={styles.cartButton}> <p>[ Add to Cart ]</p> </button>
                  )
                }
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </BasicLayout>
  );
};

export default ProductDetailPage
