import { Outlet } from "react-router-dom"
import { Fragment } from "react"
import { useSelector } from "react-redux"

import { selectIsCartOpen } from "../../store/cart/cart.selector"

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import Cart from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { selectCurrentUser } from "../../store/user/user.selector"

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, Logo } from "./navigation.styles";

const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen  = useSelector(selectIsCartOpen)
    
    return (
      <Fragment>
        <NavigationContainer>
            <Logo to="/">
                <div>
                    <CrownLogo className="navigation__logo" />
                </div>
            </Logo>
            <NavLinks>
                <NavLink to="/shop">Shop</NavLink>
                { 
                    currentUser ? (
                        <NavLink as='span' onClick={ signOutUser }> Sign Out</NavLink>
                    ) : (
                        <NavLink to="/authentification">Sign In</NavLink>
                    ) 
                }   
                <Cart />
            </NavLinks>
            { isCartOpen && <CartDropdown /> }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}
export default Navigation