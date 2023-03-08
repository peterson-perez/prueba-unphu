import useForm from "../components/hooks/useForm";
import { UserInterface } from "../models/UserInterface";
import './css/AddUser.css';


const AddUser = () => {
    const { loginData, handleOnChange, handleSubmit } = useForm<UserInterface>({
        name: '',
        firstLastName: '',
        secondLastName: '',
        id: 0,
        age: 0,
        gender: 'string',
        address: '',
        telephone: 0,
        email: '',
        civilStatus: '',
        children: '',
        birthday: ''
    })

    return (
        <>

            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration bg-dark text-white" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 justify-content-center">Agregar usuario</h3>
                                    <form autoComplete="off">

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Nombre</label>
                                                    <input type="text" id="name" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName" >Primer Apellido</label>
                                                    <input type="text" id="lastName" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="firstName">Segundo Apillido</label>
                                                    <input type="text" id="secondLastName" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName">Cedula</label>
                                                    <input type="number" id="id" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">

                                                <div className="form-outline datepicker w-100">
                                                    <label htmlFor="birthdayDate" className="form-label">Edad</label>
                                                    <input type="number" className="form-control form-control-lg" id="age" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <h6 className="mb-2 pb-1">Sexo: </h6>

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                        value="option1" checked />
                                                    <label className="form-check-label" htmlFor="femaleGender">Femenino</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                        value="option2" />
                                                    <label className="form-check-label" htmlFor="maleGender">Masculino</label>
                                                </div>

                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                        value="option3" />
                                                    <label className="form-check-label" htmlFor="otherGender">Otros</label>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline datepicker w-100">
                                                    <label className="form-label" htmlFor="firstName">Direccion</label>
                                                    <input type="text" id="address" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 ">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="lastName">Fecha de nacimiento</label>
                                                    <input type="date" id="birthday" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress" >Email</label>
                                                    <input type="email" id="emailAddress" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">

                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Tel / cell</label>
                                                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">

                                                <label className="form-label select-label">Estado civil: </label>
                                                <select className="select form-control-lg">
                                                    <option value="1">Comprometido/a</option>
                                                    <option value="2">Soltero/a</option>
                                                    <option value="3">Casado/a</option>
                                                    <option value="4">Divorceado/a</option>
                                                    <option value="6">Viudo/a</option>
                                                </select>
                                            </div>

                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="emailAddress">Hijos</label>
                                                    <input type="children" id="children" className="form-control form-control-lg" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="mt-4 pt-2">
                                            <input className="btn btn-outline-primary btn-lg" type="submit" value="Guardar" onClick={handleSubmit} />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddUser;