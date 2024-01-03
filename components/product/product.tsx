import styles from './product.module.scss'
import { useRouter } from 'next/router';

type ProductProps = {
  title: string
  price: number
  width: number
  length: number
  image: string
  id: number
}

export const Product = ({ title, price, width, length, image, id }: ProductProps) => {
  const router = useRouter();

  const handleProductClick = (productId: any) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className={styles.container} onClick={() => handleProductClick(id)}>
      <img
        src={image}
        alt={title}
        style={{ borderRadius: '10px' }}
      />
      <div className={styles.singleProduct}>
        <div className={styles.description}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>${price}</div>
        </div>
        <div className={styles.dimensions}>
          {width}" x {length}"{' '}
        </div>
      </div>
    </div>
  )
}
