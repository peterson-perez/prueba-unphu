import { Formik, FormikHelpers } from 'formik';
import '../pages/css/index.css';
import { AuthInterface } from '../models/AuthInterface';
import LoginForm from '../components/Forms/LoginForm';
import LoginValidation from '../components/validations/LoginValidation';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authReducer';

const Login = () => {

    const dispatch = useDispatch();

    const handleSubmit = (values: AuthInterface, { resetForm }: FormikHelpers<AuthInterface>) => {
        dispatch(login(values))
        resetForm();
    }


    const handleValues = {
        email: '',
        password: ''
    }

    return (
        <>
            <Formik<AuthInterface>
                initialValues={handleValues}
                validate={LoginValidation}

                onSubmit={handleSubmit}
                component={LoginForm}
            />
        </>
    )
}

export default Login;

