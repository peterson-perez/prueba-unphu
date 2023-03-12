
import { Formik } from "formik";
import { UserForm } from "../components/Forms/UserForm";
import { UserInterface } from "../models/UserInterface";
import UserValidation from "../components/validations/UserValidation";
import './css/AddUser.css';
import Header from "../components/Header";


const AddUser = () => {

    const handleValues = {
        name: '',
        firstLastName: '',
        secondLastName: '',
        id: 0,
        age: 0,
        gender: '',
        address: '',
        telephone: 0,
        email: '',
        civilStatus: '',
        children: '',
        birthday: undefined
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

                    onSubmit={
                        (values, { resetForm }) => {
                            // resetForm();
                            console.log(values)
                            resetForm();
                        }
                    }
                    component={UserForm}
                />
            </body>
        </>
    )
}

export default AddUser;




