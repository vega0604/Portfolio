import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";
import Profile from "@components/Profile";


function Layout(){
    return(
        <>
            <Navbar />
            <div>
                <Profile/>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;