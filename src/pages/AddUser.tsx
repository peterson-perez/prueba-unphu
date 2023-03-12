import { Formik, FormikHelpers } from "formik";
import { UserForm } from "../components/Forms/UserForm";
import { UserInterface } from "../models/UserInterface";
import UserValidation from "../components/validations/UserValidation";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userReducer";
import '../pages/css/index.css'


const AddUser = () => {

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
    }

    return (
        <>
            <header>
                <Header />
            </header>
            <body>
                <Formik<UserInterface>
                    initialValues={handleValues}
                    validate={UserValidation}
                    onSubmit={handleSubmit}
                    component={UserForm}
                />
            </body>
        </>
    )
}

export default AddUser;




