import { Link, Outlet } from "react-router-dom"
import { Fragment } from "react"

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import "./navigation.scss"

const Navigation = () => {
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
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}
export default Navigation