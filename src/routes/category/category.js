
import { useContext, useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import ProductItem from "../../components/product-item/product-item"

import { CategoriesContext } from "../../contexts/categories"

import "./category.scss";

const Category = () => {

    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext) 
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return(
        <Fragment>
            <h2 className="category__title">{category}</h2>
            <div className="category__wrap">
                { products &&
                    products.map((product) => {
                        return <ProductItem key={ product.id } product={ product } />
                    })
                }
            </div>
        </Fragment>

    )
}
export default Category