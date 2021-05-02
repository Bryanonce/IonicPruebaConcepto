import { useDispatch } from "react-redux";
import { useForm } from "../../../UtilHooks/useForm";
import { login } from "../services/AuthActions";

export const useLogin = () => {
    const dispatch = useDispatch();

    const {form, handleInputChange} = useForm({
        email: 'adrian@gmail.com',
        password: ''
    });
    
    const { email, password } = form;

    const handleSubmit = ()=>{
        dispatch(login({email, password}))
    }

    return {email, password, handleInputChange, handleSubmit}
}
