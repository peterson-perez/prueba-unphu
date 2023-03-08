import { Link } from "react-router-dom";
import Header from "../components/Header";
import './css/ListUsers.css';

const ListUsers = () => {

    return (
        <>
            <header>
                <Header />
            </header>

            <body>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid justify-content-start">
                        <Link className="btn btn-outline-success me-2" to={'/AddUser'}>Agregar usuario</Link>
                    </div>
                </nav>

                <h1>Lista de usuarios</h1>
                <hr />

                <table>
                    <thead>
                        <th>
                            Nombre
                        </th>
                    </thead>
                    <tbody>
                        <td>
                            Carlos
                        </td>
                    </tbody>
                </table>
            </body>
        </>
    )
}
export default ListUsers;