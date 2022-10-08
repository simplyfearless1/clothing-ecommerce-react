import { useContext, Fragment } from "react"

import CategoryPreview from "../../components/category-preview/category-preview";

import { CategoriesContext } from "../../contexts/categories"


const CategoriesPreview = () => {

    const { categoriesMap } = useContext(CategoriesContext)

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {

                    const products = categoriesMap[title];

                    return (
                        <CategoryPreview title={title} key={title} products={products}/>
                    )
                })
            }
        </Fragment>
    )
}
export default CategoriesPreview