const UserValidation = (values: any) => {

    const errors: any = {};

        if (!values.name) {
            errors.name = 'Este campo es obligatorio';
        } if(!/^[A-Z]{2,20}$/i.test(values.name)){
            errors.name = 'El nombre solo puede tener letras y de 2 a 20 caracteres';
        }

        if (!values.firstLastName) {
            errors.firstLastName = 'Este campo es obligatorio';
        } if(!/^[A-Z ]{2,20}$/i.test(values.firstLastName)){
            errors.firstLastName = 'El nombre solo puede tener letras y de 2 a 20 caracteres';
        }  

        if (!values.secondLastName) {
            errors.secondLastName = 'Este campo es obligatorio';
        } if(!/^[A-Z ]{2,20}$/i.test(values.secondLastName)){
            errors.secondLastName = 'El nombre solo puede tener letras y de 2 a 20 caracteres';
        }  

        if (!values.id) {
            errors.id = 'Este campo es obligatorio';
        } if(!/^[0-9]{11,11}$/i.test(values.id)){
            errors.id = 'la cedula solo puede tener numeros y solo 11 caracteres';
        } 

        if (!values.age) {
            errors.age = 'Este campo es obligatorio';
        } if(!/^[0-9]{1,2}$/i.test(values.age)){
            errors.age = 'la cedula solo puede tener numeros y entre 1 y 2 caracteres';
        } 

        if (!values.gender) {
            errors.gender = 'Este campo es obligatorio';
        }

        if (!values.address) {
            errors.address = 'Este campo es obligatorio';
        } if(!/^[A-Z0-9/# ]{10,50}$/i.test(values.address)){
            errors.address = 'la cedula solo puede tener numeros y entre 10 y 50 caracteres';
        }

        if (!values.birthday) {
            errors.birthday = 'Este campo es obligatorio';
        }

        if (!values.email) {
            errors.email = 'Este campo es obligatorio';
        } if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Solo puede contener numeros, letras, guiones, guiones bajos puntos y ademas debe ser formato email.';
        };

        if (!values.telephone) {
            errors.telephone = 'Este campo es obligatorio';
        } if(!/^[0-9]{10,10}$/i.test(values.telephone)){
            errors.telephone = 'El telefono debe contener 10 caracteres';
        }

        if (!values.civilStatus) {
            errors.civilStatus = 'Este campo es obligatorio';
        }

        if(!values.children){
           errors.children = 'Este campo es obligatorio';
        } if(!/^[0-9]{1,2}$/i.test(values.children)){
           errors.children = 'Este campo solo puede tener numeros y entre 1 y 2 caracteres'
        }
        
        return errors
}

export default UserValidation;