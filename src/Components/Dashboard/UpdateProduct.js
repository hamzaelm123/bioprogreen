import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function UpdateProduct() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const navigate = useNavigate()
  const [info, setInfo] = useState({
    name: '',
    categorie:0,
    image: null,
    description: ''
  });
  const { id } = useParams(); // Destructure id from useParams()

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/categories`);
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/getProduct/${id}`);
        setProduct(res.data);
        setInfo({
          name: res.data[0].product_name,
          categorie: res.data[0].categorie_id,
          image: res.data[0].product_image,
          description: res.data[0].product_description
        });
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchCategories();
    fetchProduct();
    
  }, [id]);

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };
  const handleFileChange = (e) => {
    setInfo({
      ...info,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info)
    // Create FormData object to handle file uploads
    const formData = new FormData();
    formData.append('name', info.name);
    formData.append('categorie', info.categorie);
    formData.append('image', info.image);
    formData.append('description', info.description);

    try {
        const response = await axios.put(`http://localhost:4000/updateProduct/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Product updated:', response.data);
        navigate(`/admin-dashboard`)
      } catch (error) {
        console.error('Error updating product:', error);
      }
  };

  return (
    <>
      {product.length === 0 ? (
        <h1>Loading ...</h1>
      ) : (
        <form onSubmit={handleSubmit} style={{ margin: 'auto' }} encType="multipart/form-data">
          <div>
            <label className="form-label">Name:</label>
            <input
              className="form-control"
              required
              type="text"
              name="name"
              value={info.name} // Use the info state for input value
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="form-label">Categorie:</label>
            <select className="form-control"name="categorie" onChange={handleChange}>
              <option value="" disabled>Select Categorie</option>
              {categories.map((element, key) => (
                element.id===product[0].categorie_id?<option selected value={element.id} key={key}>{element.id} - {element.categorie}</option>
                :<option  value={element.id} key={key}>{element.id} - {element.categorie}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="form-label">Description:</label>
            <input
              className="form-control"
              required
              type="text"
              name="description"
              value={info.description} // Use the info state for input value
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="form-label">Image:</label>
            <input
              className="form-control"
              
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </div>

          <button className="btn btn-primary mt-5" type="submit">Update Product</button>
        </form>
      )}
    </>
  );
}
