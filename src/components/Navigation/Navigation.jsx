import { NavLink } from "react-router-dom"
import { HeaderNavigation, HeaderNavigationLink } from "./Navigation.styled";

 const Navigation = () => {
    return <HeaderNavigation>
        <HeaderNavigationLink to="/">Home</HeaderNavigationLink>
        <HeaderNavigationLink to="/current">Current Rates</HeaderNavigationLink>
    </HeaderNavigation> 
 }

 export default Navigation;