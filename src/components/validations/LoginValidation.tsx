const LoginValidation = (values: any) => {

    let errors: any = {};

    if (!values.email) {
        errors.email = 'Este campo es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Solo puede contener numeros, letras, guiones, guiones bajos y puntos';
    };

    if (!values.password) {
        errors.password = 'Este campo es obligatorio';
    } else if (!/^[A-Z0-9.-]{6,14}$/i.test(values.password)) {
        errors.password = 'Solo se aceptan de 6 a 14 caracteres, deben ser numeros, letras, punto o guiones';
    };

    return errors;
};

export default LoginValidation;