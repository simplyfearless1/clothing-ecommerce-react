import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

import { UserContext } from "../../contexts/user";

import { signOutUser } from "../../utils/firebase/firebase";

import "./navigation.scss";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    
    return (
      <Fragment>
        <div className="navigation">
            <Link className="navigation__logo__wrap" to="/">
                <div>
                    <CrownLogo className="navigation__logo" />
                </div>
            </Link>
            <div className="navigation__links__wrap">
                <Link className="navigation__link" to="/shop">Shop</Link>
                { 
                    currentUser ? (
                        <span className="navigation__link" onClick={ signOutUser }> Sign Out</span>
                    ) : (
                        <Link className="navigation__link" to="/authentification">Sign In</Link>
                    ) 
                }   
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}
export default Navigation