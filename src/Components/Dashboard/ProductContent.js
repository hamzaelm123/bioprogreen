import React , {useState , useEffect} from "react";
import axios from "axios";
import '../../style/Dasboard.css'
import SideBar from "./SideBar";
import { useParams } from "react-router";
import Header from "./Header";
export default function ProductContent(){
    const {id} = useParams()
    const [product,setProduct]=useState({})
    const [content , setContent]=useState([])
    const [toggle,setToggle]=useState('content')
    const [test,setTest]=useState(true)
    const [detail,setDetail]=useState({})
    const [info,setInfo]=useState({
        product_id:id,
        header:'',
        description:'',
        image:null
    })
    const [quick_detail,setQuick_Detail]=useState({
        min_order_quantity:'',
        supply_ability:'',
        port:'',
        payment_terms:'',
        packaging_details:'',
        place_of_origin:'',
        processing_type:'',
        form:'',
        use_for:'',
        supply_type:'',
        brand_name:'',
        price:'',
        cultivation_type:'',
        main_ingredient:''
    })
    const getImage = (imageName) =>{
        if(product.product_image){
            return require(`../../img/${imageName}`);
        }
        
    }
    useEffect(()=>{
        const fetchProduct = async () => {
            try {
              const res = await axios.get(`http://localhost:4000/product-content/${id}`);
              setProduct(res.data[0]);
              setContent(res.data)
              console.log(res.data[0])
            } catch (err) {
              console.log(err);
            }
          };
        const fetchDetail = async () =>{
            await axios.get(`http://localhost:4000/product/quick_detail/${id}`)
            .then(res=>{
                setDetail(res.data[0])
                setTest(res.data.test)
            })
            .catch(err=>{
                console.log(err)
            })
        }  
        fetchProduct()
        fetchDetail()
        console.log(test)
    },[toggle,id])
    const handleChange=(e)=>{
        setInfo({
            ...info,
            [e.target.name]:e.target.value
        })
    }
    const detailChange=(e)=>{
        setQuick_Detail({
            ...quick_detail,
            [e.target.name]:e.target.value
        })
    }
    const handleFileChange = (e) => {
        setInfo({
          ...info,
          image: e.target.files[0],
        });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('header', info.header);
        formData.append('product_id', info.product_id);
        formData.append('description', info.description);
        formData.append('image', info.image);

        console.log(formData)
        try {
            const response = await axios.post(`http://localhost:4000/product-content/${id}`, formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Content added:', response.data);
            setToggle(true)
            } catch (error) {
            console.error('Error adding Content:', error);
            setToggle(false)
            }
      
    };
    const detailSubmit = async(e)=>{
        e.preventDefault()
        
        await axios.post(`http://localhost:4000/product/quick_detail/${id}`,{...quick_detail})
        .then(res=>{
            console.log('quick detail added successefully ! ')
            setToggle('content')
        })
        .catch(err=>{
            console.log(`error while adding quick detail ! ${err}`)
            setToggle('addDetail')
        })
    }
    return (
        <div className="Dashboard">
        <SideBar/>
        <div className="main-content">
            <Header />
            <div className="content">
                <div>
                    {
                        toggle==='content'?<button style={{margin:'20px'}} className="btn btn-success" onClick={()=>setToggle('addContent')}>Add Content</button>
                        :toggle==='addContent'?<button style={{margin:'20px'}}  className="btn btn-danger" onClick={()=>setToggle('content')}>Cancel</button>
                        :<button style={{margin:'20px'}} className="btn btn-success" onClick={()=>setToggle('addContent')}>Add Content</button>
                    }
                    {
                        !test && toggle==='content'?<button className="btn btn-primary" onClick={()=>setToggle('addDetail')}>Add Details</button>
                        :!test && toggle ==='addContent'?<button className="btn btn-primary" onClick={()=>setToggle('addDetail')}>Add Detail</button>
                        :!test && toggle ==='addDetail'?<button className="btn btn-danger" onClick={()=>setToggle('content')}>Cancel</button>
                        :''
                    }
                </div>
                {
                    toggle==='content'?<>
                            <h1>{product.product_name}</h1>
                            <img alt="product" style={{margin:'auto'}} src={getImage(product.product_image)}></img><br></br><br></br>
                            <p style={{width:'70%',margin:'auto',textAlign:'justify'}}>{product.product_description}</p><br></br> <br></br>
                            {
                                content.map((element,key)=>{
                                    return <div key={key} style={{width:'70%',textAlign:'start',margin:'auto'}}>
                                        <h3>{element.pc_header}</h3>
                                        {
                                            element.pc_image?<img src={getImage(element.pc_image)} alt="content"></img>
                                            :''
                                        }
                                        <p style={{textAlign:'justify'}}>{element.pc_description}</p>
                                    </div>
                                })
                            }
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
                        </>
                        :toggle==='addContent'?<form onSubmit={handleSubmit} style={{margin:'auto'}}  encType="multipart/form-data">
                            <div>
                                <label className="form-label">Header:</label>
                                <input className="form-control" required type="text" name="header"  onChange={handleChange} />
                            </div>
                
                            <div>
                                <label className="form-label">product id:</label>
                                <select className="form-control" name="product_id" onChange={handleChange}>
                                    <option value={id} disabled selected>{id} - {product.product_name}</option>
                                </select>
                            </div>
                
                            <div>
                                <label className="form-label">Description:</label>
                                <input className="form-control" required type="text" name="description" value={info.description} onChange={handleChange} />
                            </div>
                
                            <div>
                                <label className="form-label">Image:</label>
                                <input className="form-control" type="file" name="image" onChange={handleFileChange} />
                            </div>
                
                            <button className="btn btn-primary mt-5"  type="submit">Add Content</button>
                        </form>
                        :<form onSubmit={detailSubmit} style={{margin:'auto',width:'50%'}}>
                        <div className="detail">
                            <label className="form-label m-3">
                                Min. Order Quantity:
                                <input className="form-control" type="text"name="min_order_quantity"value={quick_detail.min_order_quantity}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Supply Ability:
                                <input className="form-control" type="text"name="supply_ability"value={quick_detail.supply_ability}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Port:
                                <input className="form-control" type="text"name="port"value={quick_detail.port}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Payment Terms:
                                <input className="form-control" type="text"name="payment_terms"value={quick_detail.payment_terms}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Packaging Details:
                                <input className="form-control" type="text"name="packaging_details"value={quick_detail.packaging_details}onChange={detailChange} />
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Place of Origin:
                                <input className="form-control" type="text"name="place_of_origin"value={quick_detail.place_of_origin}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Processing Type:
                                <input className="form-control" type="text"name="processing_type"value={quick_detail.processing_type}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Form:
                                <input className="form-control" type="text"name="form"value={quick_detail.form}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Use For:
                                <input className="form-control" type="text"name="use_for"value={quick_detail.use_for}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Supply Type:
                                <input className="form-control" type="text"name="supply_type"value={quick_detail.supply_type}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Brand Name:
                                <input className="form-control" type="text"name="brand_name"value={quick_detail.brand_name}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Price:
                                <input className="form-control" type="text"name="price"value={quick_detail.price}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Cultivation Type:
                                <input className="form-control" type="text"name="cultivation_type"value={quick_detail.cultivation_type}onChange={detailChange}/>
                            </label>
                            <br />
                            <label className="form-label m-3">
                                Main Ingredient:
                                <input className="form-control" type="text"name="main_ingredient"value={quick_detail.main_ingredient}onChange={detailChange}/></label>
                            <br />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                }
            </div>
        </div>
        </div>
    );
}