import React from "react";
import { useState ,useEffect } from "react";
import axios from 'axios';
import '../style/OurProduct.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BioLogo from '../img/BioProgreen_logo-01.png'
import rechercher from '../img/rechercher.png'
import facebok from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import wifi from '../img/wifi.png'
import x from '../img/x.png'
export default function ProductDetail(){
    const [search,setSearch]=useState(true)
    const {id}=useParams()
    const [product,setProduct]=useState([])
    const [detail,setDetail]=useState({})
    const getImage = (imageName) =>{
        if(product.length!==0){
            return require(`../img/${imageName}`);
        }
    }
    useEffect(()=>{
        const fetchProduct = async () =>{
            await axios.get(`http://localhost:4000/product-content/${id}`)
            .then(res=>{
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        const fetchDetail = async () =>{
            await axios.get(`http://localhost:4000/product/quick_detail/${id}`)
            .then(res=>{
                setDetail(res.data[0])
                console.log(res.data[0])
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchProduct()
        fetchDetail()
    },[id])
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
                {
                    product.length===0?<h1>Loading ...</h1>
                    :<main>
                        <div style={{backgroundImage:`url(${getImage(product[0].product_image)})`,height:'380px',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></div>
                        <section>
                            <h1>{product[0].product_name}</h1><br></br>
                            <p style={{width:'50%',margin:'auto',textAlign:'justify'}}>{product[0].product_description}</p>
                            {
                                product.map((element,key)=>{
                                    return <div key={key} style={{width:'50%',textAlign:'start',margin:'auto'}}>
                                        <br></br>
                                        <h3>{element.pc_header}</h3><br></br>
                                        {
                                            element.pc_image?<img src={getImage(element.pc_image)} alt="detail"></img>
                                            :''
                                        }
                                        <p style={{textAlign:'justify'}}>{element.pc_description}</p>
                                    </div>
                                })
                            }
                            <br></br>
                            {
                                detail?<>
                                    <h1>Quick Detail</h1>
                                    <div style={{margin:'auto',width:'50%',textAlign:'start',opacity:'0.7'}}>
                                        <br></br>
                                        
                                        <br></br>
                                        <p><strong>Min. Order Quantity :</strong> {detail.min_order_quantity}</p>
                                        <p><strong>Supply Ability:</strong> {detail.supply_ability}</p>
                                        <p><strong>Port:</strong> {detail.port}</p>
                                        <p><strong>Payment Terms:</strong> {detail.payment_terms}</p>

                                        <p><strong>Packaging & Delivery</strong></p>
                                        <p><strong>Packaging Details:</strong> {detail.packaging_details}</p>

                                        <p><strong>Place of Origin:</strong> {detail.place_of_origin}</p>
                                        <p><strong>Processing type:</strong> {detail.processing_type}</p>
                                        <p><strong>Form:</strong> {detail.form}</p>
                                        <p><strong>Use:</strong> {detail.use_for}</p>
                                        <p><strong>Supply Type:</strong> {detail.supply_type}</p>
                                        <p><strong>Brand Name:</strong> {detail.brand_name}</p>
                                        <p><strong>Price:</strong> {detail.price}</p>
                                        <p><strong>Cultivation type:</strong> {detail.cultivation_type}</p>
                                        <p><strong>Main Ingredient:</strong> {detail.main_ingredient}</p>
                                    </div>
                                </>
                                :''
                            }
                        </section>
                    </main>
                }
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