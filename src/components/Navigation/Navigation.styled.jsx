import styled from "@emotion/styled";
import { NavLink } from "react-router-dom"

export const HeaderNavigation = styled.nav`
display: flex;
gap: 20px;
`

export const  HeaderNavigationLink = styled(NavLink)`
font-size: 16px;
color: #030303;

&.active{ 
    color: orange;
}
`