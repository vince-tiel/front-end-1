import { Box } from "@/ui/design-system/box/box"
import { Typography } from "@/ui/design-system/typography/typography"
import Link from "next/link"

import { LoginForm } from "../login/login.form"
import Image from "next/image"
import { Container } from "@/ui/components/container/container"
import { ForgetPasswordForm } from "./forget-password.form"

export const ForgetPasswordView = () => {
    return (
         <Container className="grid grid-cols-2 gap-20 mb-32">
            <div className="flex items-center">
                <div className="relative w-full h-[531px]">
                    <Image fill src="/assets/images/authentification/passe.png" alt="bonhome" className="object-scale-down"/>
                    
                </div>
            </div>
            <div className="flex items-center">
                <Box padding_y="py-5">
                    <div className="flex items-center justify-between">
                        
                            <Typography variant="h5" component="h1">
                              Mot de passe perdu
                            </Typography>
                        
                            
                            <Typography variant="caption4" component="span" theme="primary">
                               <Link href="/connexion">Connexion</Link> 
                            </Typography>
                        
                            
                            
                        
                    
                    </div>
                    <ForgetPasswordForm/>
                </Box>
            </div>
        </Container>
    )
}