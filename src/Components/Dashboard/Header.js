import React from "react";
import '../../style/Dasboard.css'
import BioLogo from '../../img/BioProgreen_logo-01.png'
export default function Header () {
    return (
      <div className="header">
        <img src={BioLogo} alt="logo" className="img-fluid"></img>
      </div>
    );
  };