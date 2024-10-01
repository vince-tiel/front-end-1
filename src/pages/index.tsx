// {component}

import { Layout } from "@/ui/components/layout/layout";


import { Seo } from "@/ui/components/seo/seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";



export default function Home() {
  return (
    <>
    
      <Seo title="Le code de monkey" description="generate by create nbext app....." />
      <Layout isDisplayBreadCrumbs={false}>
        <LandingPageContainer />
        
      
      </Layout>
      
      
    </>
  );
}   
   
  
  

    
    

  

    
   
    
  

