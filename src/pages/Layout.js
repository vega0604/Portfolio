import { Outlet } from "react-router-dom";
import Navbar from "@components/Navbar";


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