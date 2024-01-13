import styles from './product.module.scss'
import { useRouter } from 'next/router';

type ProductProps = {
  title: string
  price: number
  width: number
  length: number
  image: string
  id: number
  on_hold: boolean,
  is_sold: boolean,
}

export const Product = ({ title, price, width, length, image, id, on_hold,is_sold }: ProductProps) => {
  const router = useRouter();
  const handleProductClick = (productId: any) => {
    router.push(`/products/${productId}`);
  };

  return (
    <div className={styles.container} onClick={() => handleProductClick(id)}>
      {(on_hold || is_sold) && (
        <div className={styles.overlay}>
          {on_hold ? <p className={styles.holdText}>ON HOLD</p> :
            is_sold ? <p className={styles.soldText}>SOLD</p> : null}
        </div>
      )}
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
