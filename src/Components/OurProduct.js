import React from "react";
import { useState ,useEffect } from "react";
import axios from 'axios';
import '../style/OurProduct.css'
import { Link } from "react-router-dom";
import BioLogo from '../img/BioProgreen_logo-01.png'
import rechercher from '../img/rechercher.png'
import img_products from '../img/products.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import wifi from '../img/wifi.png'
import x from '../img/x.png'
export default function OurProduct(){
    const [search,setSearch]=useState(true)
    const [data,setData]=useState([])
    const [categories,setCategories]=useState([])
    const [categorized,setCategorized]=useState([])
    const getImage = (imageName) =>{
        if(categorized.length!==0){
            return require(`../img/${imageName}`);
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:4000/getProducts`)
        .then(res=>{
            setCategorized(res.data)
            setData(res.data)
        } 
        )
        .catch(err=>console.log(err))
        axios.get(`http://localhost:4000/categories`)
        .then(res=>{
            setCategories(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const filterData=(condition)=>{
        if(condition.toLowerCase()==='all'||condition.toLowerCase()===''){
            setCategorized(prev=>data)
        }
        else{
            setCategorized(prev=>data.filter(e=>e.product_categorie===condition.toLowerCase()))
        }
    }
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
                        <li><button className="search" onClick={()=>setSearch(!search)}><img alt="icon" src={search?rechercher:x}></img></button></li>
                    </ul>
                </header>
                <main>
                    <div style={{backgroundImage:`url(${img_products})`,height:'380px',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
                    <section >
                        <ul id="Categories">
                            <li><button onClick={()=>filterData('All')}>All</button></li>
                            {
                                categories.map((categorie,i)=>{return(
                                    <li key={i}><button onClick={()=>filterData(categorie.categorie)}>{categorie.categorie}</button></li>)
                                })
                            }
                        </ul>
                        <div className="products">
                            {data.length===0?
                            <i>There is no product yet in the database</i>
                            :
                            Array.isArray(categorized) ? (
                                categorized.map((element, key) => (
                                    <div className="product" key={key}>
                                        <div style={{
                                            backgroundImage:`url(${getImage(element.product_image)})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',
                                            width:'250px',height:'150px'
                                        }}></div>
                                        <Link style={{textDecoration:'none'}} to={`/our-product/${element.product_id}`}><h4 style={{letterSpacing:'1px',fontWeight:'bold',color:'black'}}>{element.product_name}</h4></Link>
                                        <p style={{color:'lightgrey'}}>{element.product_categorie}</p>
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