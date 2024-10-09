import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";
export default function AddProduct(props){
    const change = props.change
    const [info,setInfo]=useState({
        name:'',
        categorie:0,
        image:null,
        description:''
    })
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:4000/categories`)
        .then(res=>{
            setCategories(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const handleChange=(e)=>{
        setInfo({
            ...info,
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
        formData.append('name', info.name);
        formData.append('categorie', info.categorie);
        formData.append('description', info.description);
        formData.append('image', info.image);

        console.log(formData)
        try {
            const response = await axios.post('http://localhost:4000/add-product', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log('Product added:', response.data);
            change(true)
          } catch (error) {
            console.error('Error adding product:', error);
            change(false)
          }
      
    };
    return(
        <form onSubmit={handleSubmit} style={{margin:'auto'}}  encType="multipart/form-data">
            <div>
                <label className="form-label">Name:</label>
                <input className="form-control" required type="text" name="name" value={info.name} onChange={handleChange} />
            </div>

            <div>
                <label className="form-label">Categorie:</label>
                <select className="form-control" name="categorie" onChange={handleChange}>
                    <option value={''} disabled selected>Select Categorie</option>
                    {
                        categories.map((element,key)=>{
                            return <option key={key} value={element.id}>{`${element.id} - ${element.categorie}`}</option>
                        })
                    }
                </select>
            </div>

            <div>
                <label className="form-label">Description:</label>
                <input className="form-control" required type="text" name="description" value={info.description} onChange={handleChange} />
            </div>

            <div>
                <label className="form-label">Image:</label>
                <input className="form-control" required type="file" name="image" onChange={handleFileChange} />
            </div>

            <button className="btn btn-primary mt-5"  type="submit">Add Product</button>
        </form>
    )
}