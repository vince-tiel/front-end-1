
import { ForgetPasswordView } from "./forget-password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFielsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";

export const ForgetPasswordContainer = () => {
    const { value : isLoading, setValue : setIsLoading } = useToggle();
    const {
        handleSubmit,
        
        formState: { errors },
        register,
        setError,
        reset,

    } = useForm<ForgetPasswordFormFielsType>();

    const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData)
        
    };
    return (
        <ForgetPasswordView
            form={{
            errors,
                    
            register,
            handleSubmit,
            onSubmit,
            isLoading,
        }}
        
        />

    );
};