import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

export default function Layout() {
    
    return (
        <>
            <Header />
            <div id="outletPage">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}