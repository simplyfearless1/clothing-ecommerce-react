import Category from "../directory-item/directory-item"
import "./directory.scss";

const Directory = ({categories}) => {

    return (
        <div className="directories">
            { categories.map(( category ) => {
                return <Category category={ category } key={category.id}/>
            }) }            
        </div>
    )
}
export default Directory