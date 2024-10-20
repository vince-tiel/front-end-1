
// Component
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";

import { Seo } from "@/ui/components/seo/seo";


// Design system
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICO
import { RiNotification2Fill, RiShieldUserLine, RiUser6Fill } from "react-icons/ri";

export default function DesignSystem () {
    return (
        <>
    
      <Seo title="Design System" description="description....." />
        <Layout>
         <Container className="py-10 space-y-5">
            {/* {typography} */}
      <div className="space-y-2">
          <Typography variant="caption2" weight="medium" >Typography</Typography>
            <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded "> 
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >Display</Typography>
                  <Typography variant="display" >Tout le monde peut coder</Typography>
                </div>

                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >H1</Typography>
                  <Typography variant="h1" >Tout est possible</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >H2</Typography>
                  <Typography variant="h2" >une variante de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >H3</Typography>
                  <Typography> encore une variante prise par défaut de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >H4</Typography>
                  <Typography variant="h4"> encore une variante de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >H5</Typography>
                  <Typography variant="h5"> encore une variante de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >Lead</Typography>
                  <Typography variant="lead"> encore une variante de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >BODY-LG</Typography>
                <Typography variant="body-lg"> encore une variante de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >BODY-Base</Typography>
                  <Typography variant="body-base"> Toujours une variante de design système</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >BODY-sm</Typography>
                  <Typography variant="body-sm"> Toujours une variante de design système</Typography>
                </div>
                <div className="flex items-center gap-8">
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >Caption 1</Typography>
                  <Typography variant="caption1">Régular</Typography>
                  <Typography variant="caption1" weight="medium">Médium</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >Caption 2</Typography>
                  <Typography variant="caption2"> Régular</Typography>
                  <Typography variant="caption2" weight="medium">Médium</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >Caption 3</Typography>
                  <Typography variant="caption3"> Régular</Typography>
                  <Typography variant="caption3" weight="medium">Médium</Typography>
                </div>
                <div className="pb-5 space-y-2">
                  <Typography variant="caption3" weight="medium" >Caption 4</Typography>
                  <Typography variant="caption4"> Régular</Typography>
                  <Typography variant="caption4" weight="medium">Médium</Typography>
                </div>
                </div>
          </div>
      </div>
                    
                    <div className="flex items-start gap-7">
                          {/* {spinner} */}   
                      <div className="space-y-2 ">
                       
                        <Typography variant="caption3" weight="medium" >Spinner</Typography>
                          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Spinner size="small"/>
                            <Spinner/>
                            <Spinner size="large" />
                          </div>
                      </div>
                      {/* {avatar} */}
                      <div className="space-y-2 ">
                       
                        <Typography variant="caption3" weight="medium" >Avatar</Typography>
                          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Avatar size="small" src= "/assets/images/Papa.jpg" alt="papa" />
                            <Avatar src= "/assets/images/Papa.jpg" alt="papa" />
                            <Avatar size="large" src= "/assets/images/Papa.jpg" alt="papa" />
                            

                          </div>
                      </div>
                       {/* {logo} */}
                      <div className="space-y-2 ">
                       
                        <Typography variant="caption3" weight="medium" >Logo</Typography>
                          <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Logo size="very-small" />
                            <Logo size="small" />
                            <Logo />
                            <Logo size="large" />
                          </div>
                      </div>
                    </div>

      
      
        
                    {/* {boutons} */}
          <div className="space-y-2 ">
            <Typography variant="caption3" weight="medium" >Small</Typography>
          <div className="space-y-4">

            <div className="flex items-center gap-2">
                <Button baseUrl="/#" isLoading size="small">Accent</Button>
                <Button baseUrl="/#" isLoading size="small" icon={{icon: RiShieldUserLine}} iconPosition="left">Accent</Button>
                <Button baseUrl="/#" isLoading size="small" variant="secondary">secondary</Button>
                <Button baseUrl="/#" isLoading size="small" variant="ico" icon={{icon: RiUser6Fill}}/>
                <Button baseUrl="/#" isLoading size="small" variant="outline">Accent</Button>
                <Button baseUrl="/#" isLoading size="small" variant="disabled">Accent</Button>
                <Button baseUrl="/#"  variant="ico" icon={{icon: RiNotification2Fill}}/>

            
            
              </div>
              <Typography variant="caption3" weight="medium" >medium</Typography>
              <div className="flex items-center gap-2" >
                <Button baseUrl="/#">Accent</Button>
                <Button baseUrl="/#" variant="secondary" icon={{icon: RiShieldUserLine}}>secondary</Button>
                <Button baseUrl="/#" variant="outline">Accent</Button>
                <Button baseUrl="/#" variant="disabled">Accent</Button>
                <Button baseUrl="/#"  variant="ico" icon={{icon: RiNotification2Fill}}/>
              </div>
              <Typography variant="caption3" weight="medium" >Large</Typography>
              <div className="flex items-center gap-2">
                <Button baseUrl="/#" size="large">Accent</Button>
                <Button baseUrl="/#" size="large" variant="secondary" icon={{icon: RiShieldUserLine}}>secondary</Button>
                <Button baseUrl="/#" size="large" variant="outline">Accent</Button>
                <Button baseUrl="/#" size="large" variant="disabled" disabled>Accent</Button>
                <Button baseUrl="/#" size="large" variant="ico" icon={{icon: RiNotification2Fill}} iconTheme="secondary"/>

                <Button size="large" variant="ico" icon={{icon: RiNotification2Fill}}
                iconTheme="gray"/>

                <Button size="large" variant="ico" icon={{icon: RiNotification2Fill}}/>
              </div>
          </div>
      
      
          </div>

          </Container>
        
        </Layout>    
     
      
    </>
  );
    
}