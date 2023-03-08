import useForm from '../components/hooks/useForm';
import LoginInterface from "../models/LoginInterface";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';

import './css/Login.css';

const Login = () => {
    
    const { loginData, handleOnChange, handleSubmit } = useForm<LoginInterface>({
        username: '',
        password: ''
    });
    
    const { username, password } = loginData;

    return (
        <>

            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>
                        <form onSubmit={handleSubmit}>
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <label>Email address</label>
                                    <MDBInput className='email' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='email' size="lg" name='username' onChange={handleOnChange} value={username} minLength={10} required/>

                                    <label>Password</label>
                                    <MDBInput className='password' wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' id='formControlLg' type='password' size="lg" name='password' onChange={handleOnChange} value={password.trim()} minLength={6} required />


                                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                    <button className='mx-2 px-5 border border-white' color='white' type='submit'>
                                        Login
                                    </button>

                                    <div className='d-flex flex-row mt-3 mb-5'>
                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='facebook-f' size="lg" />
                                        </MDBBtn>
                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </form>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

        </>
    )
}

export default Login;