import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();

   const handleAddUser = () => {
    navigate('/ListUser')
   }
    return(
        <>
        <h1>Agregar Usuario</h1>
        <hr />

        <button className="btn btn-outline-primary mt-2" onClick={handleAddUser}>Guardar</button>
        </>
    )
}

export default AddUser;