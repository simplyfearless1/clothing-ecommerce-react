import Category from "../directory-item/directory-item.component"
import { DirectoriesItemsContainer } from "./directory.styles";

const Directory = ({categories}) => {

    return (
        <DirectoriesItemsContainer>
            { categories.map(( category ) => {
                return <Category category={ category } key={category.id}/>
            }) }            
        </DirectoriesItemsContainer>
    )
}
export default Directory