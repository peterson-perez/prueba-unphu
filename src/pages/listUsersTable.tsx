import Header from "../components/header";
import { Link } from "react-router-dom";
import './css/userForm.css';
import UsePagination from "../components/hooks/usePagination";

const ListUsersTable = () => {


    const { currentPage, filteredUsers, canGoBack, canGoNext } = UsePagination()

    return (
        <>
            <Header />

            <table className="table">

                <thead>
                    <tr >
                        <th scope="col">Id</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Correo electronico</th>
                        <th scope="col">Genero</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers().map(user => (
                        <tr key={ user.id }>
                            <th scope="row">{user.id}</th>
                            <td>{user.name} {user.firstLastName} {user.secondLastName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className="d-flex">
                <Link className="btn btn-outline-dark m-2" to={'/listusers?page=' + (canGoBack ? currentPage - 1 : currentPage)} >Previa</Link>
                <p className="m-2 d-flex align-items-center">{currentPage}</p>
                <Link className="btn btn-outline-dark m-2" to={'/listusers?page=' + (canGoNext ? currentPage + 1 : currentPage)}>Siguiente</Link>
            </div>
        </>
    )
}
export default ListUsersTable;