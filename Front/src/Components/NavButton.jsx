import {Link} from "react-router-dom"

const NavButton = ({name, to}) => {
    return(
        <Link to={to}>
            <button>{name}</button>
        </Link>
    )
}

export default NavButton