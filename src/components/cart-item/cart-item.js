import "./cart-item.scss";

const CartItem = ({ cartItem }) => {

    const { name, quantity, price, imageUrl } = cartItem

    return (
        <div className="cart-item__wrap">
            <img src={ imageUrl } alt={ name } />
            <div className="cart-item__content">
                <span className="cart-item__content__name">{ name }</span>
                <span className="cart-item__content__quanity"> {`${quantity} x ${price}`}</span>
            </div>
        </div>
    )
}
export default CartItem