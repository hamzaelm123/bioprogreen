import React from "react";
import axios from "axios";
import { useEffect , useState } from "react";
import '../../style/OurProduct.css'
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Products(){
    const [products,setProducts]=useState([])
    const [categories,setCategories]=useState([])
    const [categorized,setCategorized]=useState([])
    const [toggle,setToggle]=useState(true)
    const [refresh,setRefresh]=useState(true)
    const navigate = useNavigate()
    const getImage = (imageName) =>{
        if(products.length!==0){
            return require(`../../img/${imageName}`);
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:4000/getProducts`)
        .then(res=>{
            setCategorized(res.data)
            setProducts(res.data)
            console.log(res.data)
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
    },[toggle,refresh])
    const filterData=(condition)=>{
        if(condition.toLowerCase()==='all'||condition.toLowerCase()===''){
            setCategorized(prev=>products)
        }
        else{
            setCategorized(prev=>products.filter(e=>e.product_categorie===condition.toLowerCase()))
        }
    }
    const toggleChange = (change) =>{
        setToggle(change)
    }
    const deleteProduct=async(id)=>{
        try{
            const response = await axios.delete('http://localhost:4000/delete-product', {
                data: { id }
              });
            console.log(`product with id ${id} deleted succesfully !`,response.data)
            setRefresh(!refresh)
        }
        catch (err){
            console.log(`error , product with id ${id} was not deleted`,err)
        }
    }
    return(
        <div className="content">
            <div>
                {
                    toggle?<button className="btn btn-success m-5" onClick={()=>setToggle(!toggle)}>Add Product</button>
                    :<button className="btn btn-danger m-5" onClick={()=>setToggle(!toggle)}>Cancel</button>
                }
                
            </div>
            {
                toggle?
                    <>
                        <h1>Products</h1>
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
                                {products.length===0?
                                <i>There is no product yet in the database</i>
                                :
                                Array.isArray(categorized) ? (
                                    categorized.map((element, key) => (
                                        <div className="product" key={key}>
                                            <div style={{
                                                backgroundImage:`url(${getImage(element.product_image)})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',
                                                width:'250px',height:'150px'
                                            }}></div>
                                            <Link style={{textDecoration:'none'}} to={`/admin-dashboard/product-content/${element.product_id}`}><h4 style={{letterSpacing:'1px',fontWeight:'bold',color:'black'}}>{element.product_name}</h4></Link>
                                            <p style={{color:'lightgrey'}}>{element.product_categorie}</p>
                                            <button style={{margin:'10px'}} onClick={()=>deleteProduct(element.product_id)} className="btn btn-danger">Delete</button>
                                            <button style={{margin:'10px'}} onClick={()=>navigate(`/admin-dashboard/update-product/${element.product_id}`)} className="btn btn-primary">Update</button>
                                        </div>
                                    ))
                                ) : (
                                    <i>Unexpected data format</i>
                                )
                                }
                            </div>
                        </section>
                    </>
                    :<AddProduct change={toggleChange} />
            }
        </div>
    )
}