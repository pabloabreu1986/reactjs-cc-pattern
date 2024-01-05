import { createContext } from "react"
import { ProductContextProps } from "../interfaces/interfaces"

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export { ProductContext, Provider }
