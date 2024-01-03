import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BasicLayout } from 'components/layouts/basic-layout'
import styles from './product-detail.module.scss'


const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;
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
          <div className={styles.mainContainer}>
            <div className={styles.innerContainer}>
              <div className={styles.productImage}>
                <button className={styles.backButton} onClick={() => router.push('/products')}> Back </button>
                <img
                  src={product.image}
                  alt={product.title}
                  className={styles.productImage}
                  />
              </div>
              <div className={styles.productDetails}>
                <div style={{ fontWeight: 'bold', fontSize: '100px'}}>{product.title}</div>
                <div style={{ fontSize: '18px' }}>{product.description}</div>
                <div style={{ fontSize: '18px', fontStyle: 'italic' }}>{product.width} " x {product.length} "</div>
                <div style={{ fontSize: '50px', fontWeight: 'bold' }}>${product.price} CAD</div>
                <button className={styles.cartButton}> <p>Add to Cart</p> </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </BasicLayout>
  );
};

export default ProductDetailPage
