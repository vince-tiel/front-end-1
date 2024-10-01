import { LinkTypes } from "@/lib/link-type"
import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button"
import { Logo } from "@/ui/design-system/logo/logo"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"

export const CodersMonkeysSlackView = () => {
    return (
        <Container className="flex justify-between">
            <div className="flex flex-col justify-center space-y-5 maw-w-2xl">
                <div className="flex items-center gap-2">
                    <Logo size="very-small" />
                    <Typography variant="caption2" component="span" weight="medium">
                    Coder avec Monkey
                    </Typography>
                </div>
                <Typography variant="h2" component="h2" >
                    Rejoins Monkey sur le slack coders
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg" >
                    Rejoins son groupe et obtiens de l'aide, des conseils et pourquoi pas des nouveaus potes!
                </Typography>
                <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
                    Rejoins le groupe d'aide
                </Button>
            
            </div>
            <div className="relative w-[600px] h-[600px]">
                <Image fill src="/assets/svg/camera.svg"
                    alt="image">
                </Image>
            
            </div>
        
        </Container>
    )
}