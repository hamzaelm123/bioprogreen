import React from "react";
import '../style/Menu.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import '../style/About.css'
import BioLogo from '../img/BioProgreen_logo-01.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import wifi from '../img/wifi.png'
import rechercher from '../img/rechercher.png'
import x from '../img/x.png'
const Aboutus = () => {
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
                    <Link className="Active" to="/about">About us</Link>
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
  
        <main>
          <div className="about">
            <h3 className="">About Us</h3>
          </div>
  
          <section className="text">
          <p>
                Herbs and spices Are a vital part of the Moroccan culture. Their role is far more than to aromatize the
                food but to give it a special flavor. The greatest impact of these herbs, essential oils and natural
                perfumes are physical as well as emotional. Bioprogreen is a Morocco-based brand who has established
                itself as the prime supplier or essential oils, herb and natural perfumes in Morocco. Furthermore, it is
                a renowned exporter of pure and natural essential oils, herbs, and perfumes all around the globe. We
                have with us a team of professionals, who believe in supplying the best product to the customers.
                Bioprogreen Morocco is committed to quality, and with years of experience,With years of experience, we
                are very experienced in providing our customers the products they want.
            </p>
            <p>
                As the largest supplier of natural herb and essential oils in Morocco, Bioprogreen Morocco offers the
                product in bulk to the other wholesellers and importers.No matter how large your order is we will
                deliver it with the same enthusiasm and quality. There is no compromise on quality, and our team is very
                well aware of it. With hundreds and thousands of supply chains and happy customers, we try to provide
                service to every one of them with the same spirit and enthusiasm
            </p>
            <p>
                Our ethics are simple- the more the quality, the stronger would be the healing or therapeutic effect.
                There are various suppliers of essential oils and other organic products. However, most of them pollute
                the natural ingredients with chemicals. Thus the product loses its effectiveness. The low effectiveness
                of such natural products makes people skeptical about them. Therefore, it is always prudent to buy such
                products from a trustworthy and reliable source. We only include pure plant ingredients in our products
                and not a single one of it is tested on animals.
            </p>
            <p>
                Furthermore, we have the latest technology for the extraction and packaging of products. We make sure
                that none of our product gets contaminated during the process. So if you want to take advantage of all
                the natural ingredients, all you have to do is place an order with us.
            </p>
          </section>
  
          <section className="partners">
            <div className="p-content text-center">
              <h4>We are proud to belong to:</h4>
              <div className="img-partners">
                <img src={BioLogo} alt="partner" className="" style={{ width: '150px' }} />
                <img src={BioLogo} alt="partner" className="" style={{ width: '150px' }} />
                <img src={BioLogo} alt="partner" className="" style={{ width: '150px' }} />
                <img src={BioLogo} alt="partner" className="" style={{ width: '150px' }} />
                <img src={BioLogo} alt="partner" className="" style={{ width: '150px' }} />
              </div>
            </div>
          </section>
        </main>
  
        <footer className="d-flex justify-content-around bg-light py-3">
          <p className="text-muted">Copyright ©️ 2017 www.group-oriental.com. All rights reserved.</p>
          <div className="social-media">
            <img src={facebok} alt="facebook" style={{ width: '40px', margin: '0 5px' }} />
            <img src={twitter} alt="twitter" style={{ width: '40px', margin: '0 5px' }} />
            <img src={instagram} alt="instagram" style={{ width: '40px', margin: '0 5px' }} />
            <img src={wifi} alt="wifi" style={{ width: '40px', margin: '0 5px' }} />
          </div>
        </footer>
      </div>
    );
  };
  
  export default Aboutus;