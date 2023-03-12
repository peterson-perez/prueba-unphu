import { Link } from "react-router-dom";
import Header from "../components/Header";
import './css/ListUsers.css';

const ListUsersTable = () => {

    return (
        <>
            <header>
                <Header />
            </header>


            <body>

                <table className="table table-light">
                    <thead>
                        <tr >
                            <th scope="col">Id</th>
                            <th scope="col">Nombre completo</th>
                            <th scope="col">Correo electronico</th>
                            <th scope="col">Genero</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Piterson perez Ramirez</td>
                            <td>dwasd@hotmail.com</td>
                            <td>Hombre</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Wanda Sanchez</td>
                            <td>Wanda@hotmail.com</td>
                            <td>Mujer</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>Hombre</td>
                        </tr>
                    </tbody>
                </table>

            </body>
        </>
    )
}
export default ListUsersTable;