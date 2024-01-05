import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import noImage from "../assets/no-image.jpg"

import styles from "../styles/styles.module.css"

export const ProductImage = ({ image = "" }) => {
  const { product } = useContext(ProductContext)
  const imgToSHow = image ? image : product.image ? product.image : noImage
  return (
    <img
      className={styles.productImg}
      src={imgToSHow}
      alt="Product"
    />
  )
}
