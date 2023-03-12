import { Formik, FormikHelpers } from "formik";
import { UserForm } from "../components/Forms/UserForm";
import { UserInterface } from "../models/UserInterface";
import UserValidation from "../components/validations/UserValidation";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userReducer";
import '../pages/css/index.css'
import { useNavigate } from "react-router-dom";


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




