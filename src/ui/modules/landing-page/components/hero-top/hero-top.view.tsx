import { Container } from "@/ui/components/container/container"
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image"

export const HeroTopView = () => {
    return (
        <Container className="relative pt-40 overflow-hidden pb-52">
            <div className="w-full max-w-2xl space-y-5">
                <Typography variant="h1" component="h1" className="max-w-lg">
                    Rejoins codeur monkey !
                </Typography>
                <Typography variant="body-lg" theme="gray" component="p" className="max-w-xl">
                    Ici tu te prend pas la tête, mais tu codes comme une bête, rejoins absolument cette chaîne de codeur, partage tes projets, les plus fous et fais-toi de nouveau amis dévellopeurs.
                </Typography>
                <div className="pt-2.5 space-x-5">
                    <Button baseUrl="/#">Commencer</Button>
                    <Button baseUrl="/#" variant="secondary">En savoir plus</Button>
                </div>
            </div>

            <Image
                src="/assets/svg/oiseau.svg"
                alt="illustration d'oiseau"
                width={511}
                height={250}
                className="absolute right-0 z-0 top-3 "
            />
        </Container>
    );
}