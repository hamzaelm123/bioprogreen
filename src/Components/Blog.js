import React from "react";
import '../style/Menu.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import rechercher from '../img/rechercher.png'
import '../style/Blog.css'
import BioLogo from '../img/BioProgreen_logo-01.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import orange2 from '../img/onagre2.jpg'
import twitter from '../img/twitter.png'
import wifi from '../img/wifi.png'
import x from '../img/x.png'
const Blog = () => {
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
                    <Link className="Active" to="/blog">Blog</Link>
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
  
        <main>
          <div className="blog">
            <h3 className="">Blog</h3>
          </div>
  
          <section className="tickets ">
          <div className="row col-7">
                <div className="article col-5">
                    <h2>oil Argan</h2>
                    <p><i>Sep 13, 2024 | Blog-EN | 0 Comments</i></p>
                    <p>Unveil the Secret to Radiant Skin, Lustrous Hair, and a Healthier You Welcome to the world of
                        pure,
                        organic Argan Oil—your one-stop solution for flawless skin, nourished hair, and total wellness.
                        Sourced directly from the ancient argan trees of Morocco, our premium...</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Pure Prickly Pear Seed Oil</h2>
                    <p><i>Sep 11, 2024 | Blog-EN, cosmetic, Natural Beauty | 0 Comments</i></p>
                    <p>Discover the benefits of 100% pure prickly pear seed oil, the ultimate natural elixir for glowing
                        skin, hydration, and anti-aging. Perfect for all skin types</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Deodorized Argan Oil</h2>
                    <p><i>Aug 9, 2024 | Blog-EN | 0 Comment</i></p>
                    <p>Unveiling the Magic of Deodorized Argan Oil: A Story of Innovation and Excellence: Welcome to our
                        latest blog post where we are delighted to introduce you to one of our products, Deodorized
                        Argan
                        Oil is a revolutionary product in the field of cosmetics and natural...</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Argan Oil</h2>
                    <p><i>Aug 5, 2024 | Blog-EN | 0 Comments</i></p>
                    <p>Unveiling the Magic of Argan Oil: A Story of Innovation and Excellence Introduction Welcome to
                        our latest blog post, where we are thrilled to introduce you to argan oil, a revolution in
                        essential oil production. Today, we'll take you through its history, highlight its...</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Discover the Magic of Prickly Pear Seed Oil: Your New Skincare Essential</h2>
                    <p><i>Aug 2, 2024 | Blog-EN | 0 Comments</i></p>
                    <p>PRICKLY PEAR SEED OIL In the heart of nature lies a jewel, ready to revitalize and refresh your
                        beauty routine. Let me introduce you to Exotic Prickly pear seed oil, a powerfulelixir derived
                        from the fragrant, lemony leaves of the Prickly plant. Let's embark on a...</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Black Soap With Nila</h2>
                    <p><i>Jul 9, 2024 | Blog-EN | 0 Comments</i></p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Discovering the magic of Peppermint Essential Oil: A story of Innovation and Excellence</h2>
                    <p><i>Jul 5, 2024 | Blog-EN | 0 Comments</i></p>
                    <p>Welcome to our blog where we are going to introduce you to one of our flagship products called
                        peppermint essential oil. The latter, with its recognizable fresh and minty fragrance, is much
                        more than just an aromatic plant. Its essential oil, concentrated in benefits,...</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Rose geranium essential oil: its history by excellence</h2>
                    <p><i>Jul 2, 2024 | Blog-EN | 0 Comments</i></p>
                    <p>Brief introduction Welcome to our latest blog post about rose geranium essential oil, a beauty
                        elixir We are delighted to present the essential oil of Geranium Rosat, a real gem in the world
                        of essential oils. Today we will take you on a journey through its...</p>
                </div>
                <div className="article col-5">
                    <div className="a-cover" style={{backgroundImage: `url(${orange2})`}}></div>
                    <br></br>
                    <h2>Sweet Almond Oil : a Story of Innovation and Excellence</h2>
                    <p><i>May 28, 2024 | Blog-EN | 0 Comments</i></p>
                    <p>Dive into the World of Sweet Almond Oil Thousands of years ago, sweet almond oil was used in
                        cultures around the world for its benefits to the skin and hair. Native to the Middle East and
                        the Mediterranean, almonds were prized for their nourishing and...</p>
                </div>
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
  
  export default Blog;