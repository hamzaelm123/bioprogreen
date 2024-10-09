import React from "react";
import {useParams} from 'react-router-dom'
import { useState ,useEffect } from "react";
import axios from 'axios';
import '../style/OurProduct.css'
import { Link } from "react-router-dom";
import BioLogo from '../img/BioProgreen_logo-01.png'
import rechercher from '../img/rechercher.png'
import img_products from '../img/products.png'
import herb from '../img/herb.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import wifi from '../img/wifi.png'
import x from '../img/x.png'
export default function Categorie(){
    const { categorie } = useParams()
    const [data,setData]=useState([])
    const [search,setSearch]=useState(true)
    useEffect(()=>{
        axios.get(`http://localhost:4000/our-products/${categorie}`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=>console.log(err))
    },[])
    return(
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
                            <Link className="Active" to="/our-products">Our products</Link>
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
                    <div style={{backgroundImage:`url(${img_products})`,height:'380px',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
                    <section >
                        <ul id="Categories">
                            <li><button>All</button></li>
                            <li><button>{categorie}</button></li>
                        </ul>
                        <div className="products">
                            {data.length===0?
                            <i>There is no product yet in the database</i>
                            :
                            Array.isArray(data) ? (
                                data.map((element, key) => (
                                    <div className="product" key={key}>
                                        <div style={{
                                            backgroundImage:`url(${herb})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',
                                            width:'250px',height:'150px'
                                        }}></div>
                                        <h4 style={{letterSpacing:'1px',fontWeight:'bold',color:'black'}}>{element.name}</h4>
                                        <p style={{color:'lightgrey'}}>{element.categorie}</p>
                                    </div>
                                ))
                            ) : (
                                <i>Unexpected data format</i>
                            )
                            }
                        </div>
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
    )
}