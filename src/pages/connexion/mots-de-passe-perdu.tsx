import { Layout } from "@/ui/components/layout/layout";


import { Seo } from "@/ui/components/seo/seo";
import { ForgetPasswordContainer } from "@/ui/modules/authentification/forget-password/forget-password.container";




export default function ForgetPassword() {
  return (
    <>
    
      <Seo title="Mot-de-passe-perdu" description="generate by create nbext app....." />
      <Layout >
       
        <ForgetPasswordContainer/>
      
      </Layout>
      
      
    </>
  );
} 