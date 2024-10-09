import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../style/Home.css'
import '../style/Menu.css'
import BioLogo from '../img/BioProgreen_logo-01.png'
import essential from '../img/essenial.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import herb from '../img/herb.png'
import perfums from '../img/perfums.png'
import twitter from '../img/twitter.png'
import vegetables from '../img/vegetables.png'
import wifi from '../img/wifi.png'
import rechercher from '../img/rechercher.png'
import Slide from "./Slide";
import B1 from '../img/B1.png'
import B2 from '../img/B2.png'
import B3 from '../img/B3.png'
import x from '../img/x.png'
const Home = () => {
    const [search,setSearch]=useState(true)
    return (
      <div>
        <header className="sticky-top">
          <div>
            <img src={BioLogo} alt="logo" style={{ width: '60px' }} />
          </div>
          
            <ul className="">
                {search?<>
                <li className="">
                    <Link className="Active"  to="/">Home</Link>
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
                    <Link className="UnActive" to="/contact">Contact us</Link>
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
  
        <main style={{ marginTop: '40px' }}>
          <Slide />
            <h1>Our Products</h1>
          <section>
            
            <div className="OurProduct ">
              <div className="m-5">
                <Link className="Link" to={'/our-products/Essential Oil'}>
                  <img src={essential} alt="Essential Oils" style={{ width: '200px' }} /> <br />
                  <h3>Essential Oils</h3>
                </Link>
              </div>
              <div className="m-5">
                <Link className="Link" to={'/our-products/Herbs'}>
                  <img src={herb} alt="Herb" style={{ width: '200px' }} /> <br />
                  <h3>Herb</h3>
                </Link>
              </div>
              <div className="m-5">
                <Link className="Link" to={'/our-products/perfum'}>
                  <img src={perfums} alt="Perfums" style={{ width: '200px' }} /><br />
                  <h3>Perfums</h3>
                </Link>
              </div>
              <div className="m-5">
                <Link className="Link" to={'/our-products/vegetale oil'}>
                  <img src={vegetables} alt="Vegetables" style={{ width: '200px' }} /><br />
                  <h3>Vegetables</h3>
                </Link>
                
              </div>
            </div>
          </section>
            <h1>Our Company</h1>
          <section>
           
            <div className="OurCompany ">
              <p style={{ width: '500px', letterSpacing: '2px', color: 'rgb(154, 154, 155)' }}>
                BioProGreen Morocco is a Moroccan company operating in the field of export and wholesale.
                We market a wide range of aromatic and medicinal plants, essential oils, vegetable oils, and perfumes.
              </p>
              <img src={BioLogo} alt="BioProGreen" style={{ width: '150px' }} />
            </div>
          </section>
            <h1>Blog</h1>
          <section>
            
            <div className="Blog ">
              <div className="m-3">
                <img src={B1} alt="Essential Oil" style={{ width: '350px' }} /> <br />
                <h3>Difference between essential oil and vegetable oil</h3>
              </div>
              <div className="m-3">
                <img src={B2} alt="Health Benefits" style={{ width: '350px' }} /> <br />
                <h3>Health benefits of essential oils exemplaire</h3>
              </div>
              <div className="m-3">
                <img src={B3} alt="Herbs" style={{ width: '350px' }} /><br />
                <h3>8 Powerhouse herbs you need to add to your beauty routine</h3>
              </div>
            </div>
          </section>
  
          <section className="Form ">
            <form className="" style={{ width: '50%' }}>
              <div className="">
                <label className="form-label" htmlFor="Name">Name <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="text" name="Name" id="Name" placeholder="Enter Your Name" />
              </div>
              <div className="">
                <label className="form-label" htmlFor="Phone">Phone Number <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="text" name="Phone" id="Phone" placeholder="Enter Your Phone Number" />
              </div>
              <div className="">
                <label className="form-label" htmlFor="E-mail">E-mail <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="email" name="E-mail" id="E-mail" placeholder="Enter Your E-mail" />
              </div>
              <div className="">
                <label className="form-label" htmlFor="Subject">Subject <span style={{ color: 'red' }}>*</span></label>
                <input required className="form-control" type="text" name="Subject" id="Subject" placeholder="Enter Subject" />
              </div>
              <div className="">
                <label className="form-label" htmlFor="Message">Message <span style={{ color: 'red' }}>*</span></label>
                <textarea required className="form-control" name="Message" id="Message" rows="5" placeholder="Enter Your Message"></textarea>
              </div>
              <div>
                <input type="submit" className="btn btn-success" value="Send" />
              </div>
            </form>
          </section>
        </main>
  
        <footer className="d-flex justify-content-around bg-light py-3">
          <p className="fst-italic text-dark mb-0">Copyright ©️ 2017 www.group-oriental.com. All rights reserved.</p>
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
  
  export default Home;