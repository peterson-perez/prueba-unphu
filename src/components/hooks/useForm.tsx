import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


const useForm = <T extends Object>(initState: T) => {

    const [loginData, setLoginData] = useState(initState);
    const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        navigate('/Dashboard');
    }

    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    return {
        loginData,
        handleOnChange,
        handleSubmit
    }
}


export default useForm;