import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "../components/Header";
import { RootState } from "../redux/store";
import './css/userForm.css';

const ListUsersTable = () => {

    const { listUsers } = useSelector((state: RootState) => state.user)

    const [currentPage, setCurrentPage] = useState(0)

    const nextPage = () => {
        if(listUsers.length > currentPage)
        setCurrentPage(currentPage + 5)
        console.log(listUsers.length)
    }

    const prevPage = () => {
        if (currentPage > 0)
            setCurrentPage(currentPage - 5)
    }

    const filtedUsers = () => {
        return listUsers.slice(currentPage, currentPage + 5);
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
                    {filtedUsers().map(user => (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name} {user.firstLastName} {user.secondLastName}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className="d-flex">
                <button className="btn btn-outline-dark m-2" onClick={prevPage}>Previa</button>
                <p className="m-2 d-flex align-items-center">{currentPage}</p>
                <button className="btn btn-outline-dark m-2" onClick={nextPage}>Siguiente</button>
            </div>
        </>
    )
}
export default ListUsersTable;