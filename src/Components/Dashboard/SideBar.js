import React from "react";
import '../../style/Dasboard.css'
import { Link } from "react-router-dom";
export default function SideBar(props){
    return (
        <div className="sidebar">
            <h3>Admin Dashboard</h3>
            <ul>
                <Link className="link" to={`/admin-dashboard`}><li>Products</li></Link>
                
            </ul>
        </div>
    )
}