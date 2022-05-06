import {useState} from 'react';

export const useForm =({init, handleFormSubmit}) =>{
    const [formState, setFormState] = useState(init);

    const handleChange =(e) =>{
        setFormState({
            ...formState,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit =() =>{
        handleFormSubmit(formState)
    }

    return [formState, setFormState, handleChange, handleSubmit]
}