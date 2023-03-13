import { Formik, FormikHelpers } from 'formik';
import { AuthInterface } from '../models/authInterface';
import LoginValidation from '../components/validations/loginValidation';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import LoginForm from '../components/Forms/loginForm';
import '../pages/css/index.css';

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

