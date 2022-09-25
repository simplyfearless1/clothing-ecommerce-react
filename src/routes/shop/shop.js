import { useContext } from "react"
import ProductsGrid from "../../components/products-grid/products-grid"

import { ProductContext } from "../../contexts/products"

import "./shop.scss";

const Shop = () => {

    const { products } = useContext(ProductContext)

    return (
        <ProductsGrid products={products} />
    )
}
export default Shop