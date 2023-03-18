import Navigation from "components/Navigation"
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return <div>
        <header>
            <Navigation/>
        </header>

        <Suspense fallback={<p>Loading...</p>}>
        <Outlet/>
        </Suspense>
    </div>
}

export default Layout;