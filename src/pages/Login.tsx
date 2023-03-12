import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import './css/Login.css';
import LoginInterface from '../models/LoginInterface';
import LoginForm from '../components/Forms/LoginForm';
import LoginValidation from '../components/validations/LoginValidation';

const Login = () => {

    const navigate = useNavigate();

    const handleValues = {
        email: '',
        password: ''
    }

    return (
        <>
            <Formik<LoginInterface>
                initialValues={handleValues}
                validate={LoginValidation}

                onSubmit={
                    (values, { resetForm }) => {
                        navigate('/Dashboard');
                        resetForm();
                        console.log(values)
                    }
                }
                component={LoginForm}
            />
        </>
    )
}

export default Login;

