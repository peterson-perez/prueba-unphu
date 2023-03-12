import DatePicker from "react-datepicker";
import { FormikProps, ErrorMessage, Field } from "formik";
import { UserInterface } from "../../models/UserInterface";
import "react-datepicker/dist/react-datepicker.css";
import "../../pages/css/AddUser.css"



export const UserForm: (props: FormikProps<UserInterface>) => JSX.Element =
    ({ setFieldValue, values, handleSubmit, handleBlur, handleChange }) => {
        const dateOnChange = (date: Date | null) => {
            setFieldValue("birthday", date);
        }

        return (
            <section className="vh-100">
                <div className="container py-1 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration bg-dark text-white" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 justify-content-center">Agregar usuario</h3>


                                    <form autoComplete="off" onSubmit={handleSubmit}>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Nombre</label>
                                                    <input type="text" id="name" name="name" className="form-control form-control-lg"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className='error' name='name' component='small' />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName" >Primer Apellido</label>
                                                    <input type="text" id="firstLastName" name="firstLastName" className="form-control form-control-lg"
                                                        value={values.firstLastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className='error' name='firstLastName' component='small' />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Segundo Apillido</label>
                                                    <input type="text" id="secondLastName" name="secondLastName" className="form-control form-control-lg"
                                                        value={values.secondLastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="secondLastName" component="small" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName">Cedula</label>
                                                    <input type="text" id="id" name="id" className="form-control form-control-lg"
                                                        value={values.id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="id" component="small" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline datepicker w-100">
                                                    <label htmlFor="birthdayDate" className="form-label">Edad</label>
                                                    <input type="text" id="age" name="age" className="form-control form-control-lg"
                                                        value={values.age}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="age" component="small" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">Hijos</label>
                                                    <input type="children" id="children" name="children" className="form-control form-control-lg"
                                                        value={values.children}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="children" component="small" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline datepicker w-100">
                                                    <label className="form-label" htmlFor="address">Direccion</label>
                                                    <input type="text" id="address" name="address" className="form-control form-control-lg"
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="address" component="small" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 ">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName">Fecha de nacimiento</label>
                                                    <DatePicker id="birthday" name="birthday" className="form-control form-control-lg"
                                                        value={values.birthday?.toLocaleDateString()}
                                                        onChange={dateOnChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="birthday" component="small" />
                                                </div>

                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress" >Email</label>
                                                    <input type="email" id="email" name="email" className="form-control form-control-lg"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="email" component="small" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Tel / cell</label>
                                                    <input type="tel" id="telephone" name="telephone" className="form-control form-control-lg"
                                                        value={values.telephone}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur} />
                                                    <ErrorMessage className="error" name="telephone" component="small" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2 d-flex flex-column">

                                                <label className="form-label select-label">Estado civil: </label>
                                                <select id="civilStatus" name="civilStatus" className="select form-control-lg"
                                                    value={values.civilStatus}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} >
                                                    <option >selecciona</option>
                                                    <option value="Soltero/a">Soltero/a</option>
                                                    <option value="Comprometido/a">Comprometido/a</option>
                                                    <option value="Casado/a">Casado/a</option>
                                                    <option value="Divorceado/a">Divorceado/a</option>
                                                    <option value="Viudo/a">Viudo/a</option>
                                                </select>
                                                <ErrorMessage className="error-option" name="civilStatus" component="small" />
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2 d-flex flex-column">

                                                <label className="form-label select-label">Genero </label>
                                                <Field id="gender" as="select" name="gender" className="select form-control-lg ">
                                                    <option value="">selecciona</option>
                                                    <option value="Hombre">Hombre</option>
                                                    <option value="Mujer">Mujer</option>
                                                    <option value="Otros">Otros</option>
                                                </Field>
                                                <ErrorMessage className="error-option" name="gender" component="small" />
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2">
                                            <input className="btn btn-outline-light btn-lg" type="submit" value="Guardar" />
                                        </div>

                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }