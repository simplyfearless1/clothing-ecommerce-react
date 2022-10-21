import "./directory-item.scss"

const DirectoryItem = ({ category }) => {

    let { title, img } = category

    return(
        <div className="directory-item">
            <div className="directory-item__bg" style={{
                backgroundImage: `url(${img})`
            }}></div>
            <div className="directory-item__content">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}   
export default DirectoryItem