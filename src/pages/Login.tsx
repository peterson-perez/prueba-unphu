import useForm from '../components/hooks/useForm';
import LoginType from "../models/LoginType";

const Login = () => {

    const {loginData, handleOnchange, handleSubmit} = useForm<LoginType>({
       username: '',
       password: ''
    });

    return (
        <>
            <h1>Login</h1>
            <hr />

            <form autoComplete='off' onSubmit={handleSubmit}>
                <input
                    name='username'
                    className="email"
                    type="text"
                    onChange={handleOnchange}
                />

                <input
                    name='password'
                    className="password"
                    type="password"
                    onChange={handleOnchange}
                />

                <button
                    className="btn btn-outline-primary mt-2"
                    type='submit'
                >inicial sesion</button>
            </form>
        </>
    )
}

export default Login;