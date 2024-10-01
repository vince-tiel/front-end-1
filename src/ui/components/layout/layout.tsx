import { BreadCrumbs } from "../breadcrumbs/bread-crumbs"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"

interface Props {
  children: React.ReactNode;
  isDisplayBreadCrumbs?: boolean;
}
export const Layout = ({children,isDisplayBreadCrumbs = true}: Props) => {
    return(
      <> 
        <Navigation />
       
        {isDisplayBreadCrumbs &&  <BreadCrumbs />}
            {children}
            <Footer/>
      </>
  )  
}