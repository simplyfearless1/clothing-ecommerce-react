import "./category-item.scss"

const Category = ({ category }) => {

    let { title, img } = category

    return(
        <div className="category">
            <div className="category__bg" style={{
                backgroundImage: `url(${img})`
            }}></div>
            <div className="category__content">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}   
export default Category