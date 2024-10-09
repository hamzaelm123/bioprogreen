import React from "react";
import '../../style/Dasboard.css'
import SideBar from "./SideBar";
import Products from "./Products";
import Header from "./Header";
export default function Dashboard(){
    return (
        <div className="Dashboard">
        <SideBar/>
        <div className="main-content">
            <Header />
            <Products />
        </div>
        </div>
    );
}