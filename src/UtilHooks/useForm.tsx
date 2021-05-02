import React, { useState } from "react"

export type FormTypes = 
    | {email: string, password: string}

interface UseFormInterface {
    form: FormTypes,
    handleInputChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

export const useForm = (initialValue:FormTypes):UseFormInterface => {
    const [form, setForm] = useState<FormTypes>(initialValue)

    const handleInputChange = ({target}:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return {form, handleInputChange}
}
