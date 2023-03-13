import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";



const Header = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logout())
    }

    return (
        <header>

            {/* header */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="btn-group">
                        <button type="button" className="btn btn-outline-light m-2 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <p className="d-flex justify-content-center">Bienvenido</p>
                            <li><hr className="dropdown-divider" /></li>
                            <button className="btn btn-outline-dark w-100" onClick={handleClick}>Cerrar sesión</button>
                        </ul>
                    </div>
                    <button className="btn btn-outline-light m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>

            {/* menu sidebar */}

            <div className="offcanvas offcanvas-end bg-dark text-white w-25" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header ">
                    <button type="button" className="btn btn-outline-light m-2" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                    <Link className="btn btn-outline-light text-white" to={'/Dashboard'}>Dashboard</Link>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <hr className="w-75" />
                </div>
                <div className="offcanvas-body">
                    <Link className="btn btn-outline-light m-2  d-flex justify-content-center" to={'/adduser'}>Agregar usuario</Link>
                    <Link className="btn btn-outline-light m-2  d-flex justify-content-center" to={'/listusers'}>Lista de usuarios</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;