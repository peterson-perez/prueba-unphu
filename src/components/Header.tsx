import { Link } from "react-router-dom";

const Header = () => {


    return (
        <>
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul className="dropdown-menu">
                    <Link className="dropdown-item" to={'/'}>Cerrar sesión</Link>
                    <li><hr className="dropdown-divider" /></li>    
                </ul>
            </div>


        </>
    )
}

export default Header;