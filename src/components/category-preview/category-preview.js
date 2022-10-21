import { Link } from "react-router-dom";

import ProductItem from "../product-item/product-item";

import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
    return(
        <div className="category-preview__wrap">
            <h2>
                <Link className="category-preview__title" to={title}>
                    { title.toUpperCase() }
                </Link>
            </h2>
            <div className="category-preview__grid">
                { 
                    products.filter((_, idx) => idx < 4 )
                    .map((product) => {
                        return <ProductItem key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}
export default CategoryPreview