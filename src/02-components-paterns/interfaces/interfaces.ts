import { ReactElement } from "react"

export interface Product {
  id: string
  title: string
  image?: string
}

export interface ProductCardProps {
  product: Product
  children: ReactElement | ReactElement[]
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element
  Title: ({ title }: { title?: string | undefined }) => JSX.Element
  Image: ({ image }: { image?: string | undefined }) => JSX.Element
  Buttons: () => JSX.Element
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}
