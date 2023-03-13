import { FormikProps, ErrorMessage } from "formik";
import { AuthInterface } from "../../models/authInterface";
import '../../pages/css/login.css'

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
}
    from 'mdb-react-ui-kit';

const LoginForm: (props: FormikProps<AuthInterface>) => JSX.Element =
    ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

        < MDBContainer fluid >

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <form id="form" onSubmit={handleSubmit} autoComplete="off">
                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-white-50 mb-5">por favor escribe tu email y contraseña!</p>

                                <label>Email address</label>
                                <MDBInput autoComplete="off" className='email' wrapperClass='mb-4 mx-5 w-100' id='formControlLg' type='email' size="lg" name='email' onChange={handleChange} value={values.email} onBlur={handleBlur} />
                                <ErrorMessage className='error' name='email' component='small' />

                                <label>Password</label>
                                <MDBInput className='password' wrapperClass='mb-4 mx-5 w-100' id='formControlLg' type='password' size="lg" name='password' onChange={handleChange} value={values.password} onBlur={handleBlur} />
                                <ErrorMessage className='error' name='password' component='small' />

                                <button id="button-submit" className='btn btn-outline-light m-3' type='submit' disabled={isSubmitting}>Entrar</button>

                            </MDBCardBody>
                        </MDBCard>
                    </form>
                </MDBCol>
            </MDBRow>

        </MDBContainer >

    )

export default LoginForm;