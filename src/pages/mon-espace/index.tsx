import { Layout } from "@/ui/components/layout/layout";


import { Seo } from "@/ui/components/seo/seo";
import { UserAccountContainer } from "@/ui/modules/user-profile/user-account/user-account.container";





export default function Connexion() {
  return (
    <>
    
      <Seo title="Mon espace" description="ma page" />
      <Layout withSidebar>
       
        <UserAccountContainer/>
      
      </Layout>
      
      
    </>
  );
} 