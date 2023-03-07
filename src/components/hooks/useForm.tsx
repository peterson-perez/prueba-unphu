import LoginType from "../../models/LoginType";
import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";


function useForm<T> ( initState: any) {

    const [loginData, setLoginData] = useState<LoginType>(initState);

    // const navigate = useNavigate();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(loginData)
        // navigate('/Dashboard');
    }

    const handleOnchange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setLoginData({
            ...loginData,
            [name]: value
        });
        console.log(name, value)
    }

    return {
        loginData,
        handleOnchange,
        handleSubmit
    }
}


export default useForm;