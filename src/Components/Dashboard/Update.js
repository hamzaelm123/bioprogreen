import React from "react";
import '../../style/Dasboard.css'
import SideBar from "./SideBar";
import UpdateProduct from "./UpdateProduct";
import Header from "./Header";
import { useParams } from "react-router";
export default function Update(){
    const {id}=useParams()
    return (
        <div className="Dashboard">
        <SideBar />
        <div className="main-content">
            <Header />
            <UpdateProduct id={id}/>
        </div>
        </div>
    );
}