import { Link } from "react-router-dom";

const Menu = () => {


    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid justify-content-start">
                    <Link className="btn btn-outline-primary me-2" to={'/AddUser'}>Agregar usuario</Link>
                    <Link className="btn btn-sm btn-outline-secondary" to={'/ListUser'}>Lista de usuarios</Link>
                </div> 
            </nav>  

        </>
    )
}

export default Menu;