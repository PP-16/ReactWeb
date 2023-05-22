import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Portfolio from "../pages/Portfolio"
import Services from "../pages/Services"
import Team from "../pages/Team"
import Profile from "../pages/components/Profile"
import Cart from "../pages/Cart"

export const PublicRoute = [
    {
        id:"0",
        path:"/",
        element:<Home/>
    },
    {
        id:"1",
        path:"/home",
        element:<Home/>
    },
    {
        id:"2",
        path:"/about",
        element:<About/>
    },
    {
        id:"3",
        path:"/contact",
        element:<Contact/>
    },
    {
        id:"4",
        path:"/product",
        element:<Portfolio/>
    },
    {
        id:"5",
        path:"/services",
        element:<Services/>
    },
    {
        id:"6",
        path:"/details",
        element:<Team/>
    },
    {
        id:"7",
        path:"/profile",
        element:<Profile/>
    },
    {
        id:"8",
        path:"/cart",
        element:<Cart/>
    },
];