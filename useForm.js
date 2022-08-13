import { useState } from "react"


export const useForm = (initialFormValue = {}) => {

    // {
    //     username: '',
    //     email: '',
    //     password: ''
    // }
  
    const [formState, setFormState] = useState(initialFormValue)

    const handleInputChange = ({ target }) => {
        const { name, value } = target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleResetForm = () => {
        setFormState(initialFormValue)
    }

   return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm
   }
}
