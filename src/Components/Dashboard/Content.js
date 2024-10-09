import React from "react";
import Products from "./Products";
import '../../style/Dasboard.css'
export default function Content(props){
    const Page = props.page
    return (
        <div className="content">
          {Page === 'Products' ? <Products />
          :Page === 'Analytics' ? 'Analytics '
          : 'Settings'}
        </div>
      );
}