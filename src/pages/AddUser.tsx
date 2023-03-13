import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserForm } from "../components/Forms/userForm";
import { UserInterface } from "../models/userInterface";
import UserValidation from "../components/validations/userValidation";
import { addUser } from "../redux/slices/userSlice";
import Header from "../components/header";
import '../pages/css/index.css'


const AddUser = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const handleValues = {
        name: '',
        firstLastName: '',
        secondLastName: '',
        id: '',
        age: '',
        gender: '',
        address: '',
        telephone: '',
        email: '',
        civilStatus: '',
        children: '',
        birthday: undefined
    }

    const handleSubmit = (values: UserInterface, { resetForm }: FormikHelpers<UserInterface>) => {
        dispatch(addUser(values))
        resetForm();
        navigate('/listusers')

    }

    return (
        <>
            <Header />
            <Formik<UserInterface>
                initialValues={handleValues}
                validate={UserValidation}
                onSubmit={handleSubmit}
                component={UserForm}
            />

        </>
    )
}

export default AddUser;




