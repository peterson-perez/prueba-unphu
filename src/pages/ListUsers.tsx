import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../components/Header";
import { RootState } from "../redux/store";
import './css/userForm.css';
import { Link, useSearchParams } from "react-router-dom";

const LIMIT_PER_PAGE = 5
const ListUsersTable = () => {

    const { listUsers } = useSelector((state: RootState) => state.user)

    const [search] = useSearchParams()
    const currentPage = Number(search.get('page') || 0)

    const canGoBack = currentPage > 0
    const canGoNext = (currentPage + 1) * LIMIT_PER_PAGE < listUsers.length

    const filteredUsers = () => {
        const offset = currentPage * LIMIT_PER_PAGE
        return listUsers.slice(offset, offset + LIMIT_PER_PAGE);
    }

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