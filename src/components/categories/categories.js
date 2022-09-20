import Category from "../category-item/category-item"
import "./categories.scss";

const Categories = ({categories}) => {

    return (
        <div className="categories">
            { categories.map(( category ) => {
                return <Category category={ category } key={category.id}/>
            }) }            
        </div>
    )
}
export default Categories