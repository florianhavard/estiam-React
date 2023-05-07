import { Link } from "react-router-dom";

function NavLink({ logo, text, link }) {
    return (
        <div className="navLink">
            <Link to={link} >
                <span>{logo} </span><span>{text}</span>
            </Link>
        </div>
    )
}
export default NavLink;