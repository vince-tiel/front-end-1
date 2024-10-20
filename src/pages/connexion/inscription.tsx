import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";


import { Seo } from "@/ui/components/seo/seo";
import { RegisterContainer } from "@/ui/modules/authentification/register/register.container";




export default function Register() {
  return (
    <>
    
      <Seo title="inscription" description="generate by create nbext app....." />
      <Layout sessionStatus={GUEST}>
       
       <RegisterContainer />
      
      </Layout>
      
      
    </>
  );
} 