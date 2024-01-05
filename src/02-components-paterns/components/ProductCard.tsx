import { Provider } from "../context/ProductContext"
import { useCounter } from "../hooks/useCounter"
import { ProductCardProps } from "../interfaces/interfaces"

import styles from "../styles/styles.module.css"

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useCounter()

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product
      }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}
