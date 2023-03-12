const UserValidation = (values: any) => {

    const errors: any = {};

        if (!values.name) {
            errors.name = 'Este campo es obligatorio';
        }else if(!/^[A-Z]{2,14}$/i.test(values.name)){
            errors.name = 'El nombre solo puede tener letras y de 2 a 14 caracteres';
        }

        if (!values.firstLastName) {
            errors.firstLastName = 'Este campo es obligatorio';
        }else if(!/^[A-Z]{2,14}$/i.test(values.firstLastName)){
            errors.firstLastName = 'El nombre solo puede tener letras y de 2 a 14 caracteres';
        }  

        if (!values.secondLastName) {
            errors.secondLastName = 'Este campo es obligatorio';
        }else if(!/^[A-Z]{2,14}$/i.test(values.secondLastName)){
            errors.secondLastName = 'El nombre solo puede tener letras y de 2 a 14 caracteres';
        }  

        if (!values.id) {
            errors.id = 'Este campo es obligatorio';
        }else if(!/^[0-9]{11,11}$/i.test(values.id)){
            errors.id = 'la cedula solo puede tener numeros y 11 caracteres';
        } 

        if (!values.age) {
            errors.age = 'Este campo es obligatorio';
        }else if(!/^[0-9]{1,2}$/i.test(values.age)){
            errors.age = 'la cedula solo puede tener numeros y entre 1 y 2 caracteres';
        } 

        if (!values.gender) {
            errors.gender = 'Este campo es obligatorio';
        }

        if (!values.address) {
            errors.address = 'Este campo es obligatorio';
        }else if(!/^[A-Z0-9]{1,2}$/i.test(values.address)){
            errors.address = 'la cedula solo puede tener numeros y entre 1 y 2 caracteres';
        }

        if (!values.birthday) {
            errors.birthday = 'Este campo es obligatorio';
        }

        if (!values.email) {
            errors.email = 'Este campo es obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Solo puede contener numeros, letras, guiones, guiones bajos y puntos';
        };

        if (!values.telephone) {
            errors.telephone = 'Este campo es obligatorio';
        }else if(!/^[0-9]{10,13}$/i.test(values.telephone)){
            errors.telephone = 'El telefono debe contener entre 10 y 13 caracteres';
        }

        if (!values.civilStatus) {
            errors.civilStatus = 'Este campo es obligatorio';
        }

        if(!values.children){
           errors.children = 'Este campo es obligatorio';
        }
        
        return errors
}

export default UserValidation;