import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HightLightListView = () => {
    return (
        <Container className="py-24 space-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[320px] relative mt-10  ">
                    <Image fill src="/assets/svg/manette.svg" alt="manette" ></Image>
                </div>
                <div className="max-w-md space-y-7 ">
                    <Typography variant="h3" component="h2">
                        De novice à dévellopeur en un clein d'oeil !
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>
                            Progresse rapidement    
                        </ListPoint>
                        <ListPoint>
                            Inspires-toi    
                        </ListPoint>
                        <ListPoint>
                            Gagne en confiance    
                        </ListPoint>
                        
                    </div>
                    <div className="relative inline-block">
                        <Button baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">Let's go</Button>
                        <Image src="/assets/svg/cursor.svg" alt="curseur" width={25 } height={27 }
                        className="absolute right-5 -bottom-5"/>
                    </div>
                </div>
            </div>
             <div className="flex flex-row-reverse justify-center gap-24">
                <div className="w-[520px] h-[320px] relative mt-10  ">
                    <Image fill src="/assets/svg/spinning.svg" alt="manette" ></Image>
                </div>
                <div className="max-w-md space-y-7 ">
                    <Typography variant="h3" component="h2">
                        Boost ta carrière de dévellopeur
                    </Typography>
                    <div className="space-y-3">
                        <ListPoint>
                            Partage tes projets, obtiens des feedbacks    
                        </ListPoint>
                        <ListPoint>
                            Connecte-toi, élargis ton réseau pro !    
                        </ListPoint>
                        <ListPoint>
                            Reste inspiré, motivé avec la communauté   
                        </ListPoint>
                        
                    </div>
                    <div className="relative inline-block">
                        <Button variant="secondary" baseUrl="/#" icon={{ icon: RiArrowRightLine }} iconPosition="right">Démarrer</Button>
                        
                    </div>
                </div>
            </div>
            
        </Container>
    );
};
interface Props {
    children: React.ReactNode;
}
const ListPoint = ({ children }: Props) => {
    return (
        <div className="flex items-start gap-2">
            <RiCheckboxCircleLine size="24" className="mt-0.5 text-secondary" />
            <Typography variant="body-lg" component="span">
                {children}
            </Typography>
        </div>
    );
};