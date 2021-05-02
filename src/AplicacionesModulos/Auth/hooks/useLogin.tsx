import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../UtilHooks/useForm";
import { startLoading, stopLoading } from "../../Loading/services/LoadingActions";
import { login } from "../services/AuthActions";

export const useLogin = () => {

    const isLoading = useSelector((store:any)=>store.loading.isLoading)

    const dispatch = useDispatch();

    const {form, handleInputChange} = useForm({
        email: 'adrian@gmail.com',
        password: '123456789'
    });
    
    const { email, password } = form;

    const handleSubmit = ()=>{
        dispatch(startLoading())
        dispatch(login({email, password}))
        dispatch(stopLoading())
    }

    return {email, password, isLoading, handleInputChange, handleSubmit}
}
