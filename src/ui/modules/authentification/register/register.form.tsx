import { FormsType } from "@/types/forms"
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}


export const RegisterForm = ({ form }: Props) => {
    const {
    
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit
    } = form;
    return (
        <form onSubmit={handleSubmit(onSubmit)}  className="pt-8 pb-5 space-y-4">
            <Input
                
                placeholder={"votremail@gmail.com"}
                register={register}
                errors={errors}
                id={"email"}

                type="email"


                errorMsg="Tu dois renseigner ce champ" isLoading={false}                
            />
            <Input
                
                placeholder={"mot de passe"}
                type="password"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id={"password"} isLoading={false}            />
            <Input
                
                placeholder={"Comment as-tu connu ce site ?"}
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id={"how_did_hear"} isLoading={false}            />
            <Button
                
                baseUrl="https://console.firebase.google.com/project/formation-f0515/authentication/users"
                
                type="submit"
                
                fullwith>
                S'inscrire
            </Button>
            
        </form>
    
        
    );
};