import { useEffect } from "react";
import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import {  LoginFormFielsType } from "@/types/forms";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from"@/config/firebase-config"
import { useToggle } from "@/hooks/use-toggle";

export const LoginContainer = () => {
   const { value : isLoading, setValue : setIsLoading } = useToggle();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
            } else {
                console.log("not connected");
                
            }
        });
        
    }, []);
    
    const {
        handleSubmit,
        
        formState: { errors },
        register,
        setError,
        reset,

    } = useForm<LoginFormFielsType>();

    const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
        setIsLoading(true);
        const { password } = formData;
        if (password.length <= 5) {
            setError("password",  {
                type: "manuel",
                message:"Ton mot de passe doit comporter minimum 6 caractères",
                    
            })
        }
        console.log('formData', formData)
        
    };
    return (<LoginView
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