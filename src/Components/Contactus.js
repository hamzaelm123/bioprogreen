import React from "react";
import '../style/Menu.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import rechercher from '../img/rechercher.png'
import '../style/Contact.css'
import BioLogo from '../img/BioProgreen_logo-01.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import wifi from '../img/wifi.png'
import x from '../img/x.png'
const ContactUs = () => {
    const [search,setSearch]=useState(true)
    return (
      <div>
        <header className="d-flex justify-content-center sticky-top">
          <div>
            <img src={BioLogo} alt="logo" style={{ width: '60px' }} />
          </div>
          <ul className="">
                {search?<>
                <li className="">
                    <Link className="UnActive"  to="/">Home</Link>
                </li>
                <li className="">
                    <Link className="UnActive" to="/about">About us</Link>
                </li>
                <li className="">
                    <Link className="UnActive" to="/our-products">Our products</Link>
                </li>
                <li className="">
                    <Link className="UnActive" to="/blog">Blog</Link>
                </li>
                <li className="">
                    <Link className="Active" to="/contact">Contact us</Link>
                </li></>
                :<li>
                <form className="searchbar">
                    <input type="search" className="form-control" placeholder="search" ></input> 
                    <input type="submit" className="btn btn-success" value={'search'}></input>
                </form>
                </li>}
                <li><button className="search" onClick={()=>setSearch(!search)}><img src={search?rechercher:x}></img></button></li>
            </ul>
        </header>
  
        <main>
          <div className="contact">
            <br /><br /><br />
            <h1 className="text-center text-white" style={{ textShadow: '2px 2px #000000' }}>Contact us</h1>
            <h3 className="text-center text-dark">+212 664 511 976</h3>
          </div>
  
          <section className="infos ">
            <form className="" style={{ width: '35%' }}>
              <div className="mb-3">
                <label className="form-label" htmlFor="Name">Name <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="text" name="Name" id="Name" placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="text" name="Phone" id="Phone" placeholder="Enter Your Phone Number" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="E-mail">E-mail <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="email" name="E-mail" id="E-mail" placeholder="Enter Your E-mail" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Subject">Subject <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="text" name="Subject" id="Subject" placeholder="Enter Subject" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Message">Message <span style={{ color: 'red' }}>*</span></label>
                <textarea required className="form-control" name="Message" id="Message" rows="5" placeholder="Enter Your Message"></textarea>
              </div>
              <div>
                <input type="submit" className="btn btn-success" value="Send" />
              </div>
            </form>
  
            <div className="bioprogreen ms-5">
              <h3 className="">BioProGreen</h3>
              <p className="fw-bold">N°200 Lot Elmassar, Zone industrielle Sidi Ghanem, Route de Safi, 40 000 Marrakech</p>
              <p><span className="fw-bold">Phone number:</span> +212 600 604 387</p>
              <p><span className="fw-bold">WhatsApp:</span> +212 665 665 592</p>
              <p><span className="fw-bold">E-mail: </span>contact@www.bioprogreen.com</p>
            </div>
          </section>
        </main>
  
        <footer className="d-flex justify-content-around bg-light py-3">
          <p className="fst-italic text-dark mb-0">Copyright ©️ 2017 www.group-oriental.com . All rights reserved.</p>
          <div className="social-media d-flex">
            <img src={facebok} alt="facebook" style={{ width: '40px' }} />
            <img src={twitter} alt="twitter" style={{ width: '40px' }} />
            <img src={instagram} alt="instagram" style={{ width: '40px' }} />
            <img src={wifi} alt="wifi" style={{ width: '40px' }} />
          </div>
        </footer>
      </div>
    );
  };
  
  export default ContactUs;