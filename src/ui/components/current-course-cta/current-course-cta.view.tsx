import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"

export const CurrentCourseCtaView = () => {
    return (
        <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-2.5" >
                    Formation React.js gratuite
                </Typography>
                <Typography variant="lead" component="h3" className="mb-5" >
                    Apprends à coder l'app de coder Monkey
                </Typography>
                <Typography variant="caption3" theme="gray" component="p" className="mb-16" >
                    fais un cv super cool grâce à cette formation
                </Typography>
                <a href="/#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 text-white bg-gray-800 rounded opacity-0 hover:opacity-95 animate">
                            <RiPlayCircleLine size="42"/>
                            <Typography variant="caption2" theme="white" className="uppercase" weight="medium" >Lire la suite</Typography>
                        </div>
                        <Image fill src="assets/images/papa.jpg" alt="mon image" className="object-cover object-center rounded">
                        </Image>
                    
                    </div> 
                </a>
            </Container>
        
        
        </div>
    )
}