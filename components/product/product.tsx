import styles from './product.module.scss'
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive'

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
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const mobileStyle = {
    fontSize: 'smaller'
  };

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
          <div className={styles.title} style={isMobile ? mobileStyle : {}}>{title}</div>
          <div className={styles.price} style={isMobile ? mobileStyle : {}}>${price}</div>
        </div>
        <div className={styles.dimensions} style={isMobile ? mobileStyle : {}}>
          {width}" x {length}"{' '}
        </div>
      </div>
    </div>
  )
}
