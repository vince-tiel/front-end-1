import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigations"

interface Props {
    children: React.ReactNode
}
export const Layout = ({children}: Props) => {
    return(
      <> 
            <Navigation/>
            {children}
            <Footer/>
      </>
  )  
}