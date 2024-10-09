const express = require('express')
const multer = require('multer');
const path = require('path');
const connection = require('./connection');
const router = express.Router()
const axios = require('axios')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../bioprogreen/src/img');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB file size limit
});

router.get('/categories', (req, res) => {
  connection.query('select * from categories', (err, rows, fields) => {
    if (err) {
      res.status(400).json({ error: `there is an error , ${err}` })
    }
    const results = JSON.parse(JSON.stringify(rows))
    res.status(200).json(results)
  })
})

router.get('/getProducts', (req, res) => {
  const query = 'SELECT p.id as product_id ,p.name as product_name , c.categorie as product_categorie , p.description as product_description , p.image as product_image from products p inner join categories c on p.categorie = c.id '
  connection.query(query, (err, rows) => {
    if (err) {
      res.status(400).json({ error: `there is an error : ${err} ` })
    }
    const results = JSON.parse(JSON.stringify(rows))
    res.status(200).json(results)
  })
})

router.get('/getProduct/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  const query = 'SELECT p.id as product_id ,p.name as product_name , c.categorie as product_categorie , c.id as categorie_id , p.description as product_description , p.image as product_image from products p inner join categories c on p.categorie = c.id WHERE p.id = ?'
  connection.query(query,[id], (err, result) => {
    if (err) {
      res.status(400).json({ error: `there is an error : ${err} ` })
    }
    res.status(200).json(result)
  })
})

router.get('/our-products/:categorie', (req, res) => {
  const categorie = req.params.categorie.toLowerCase()
  connection.query(`SELECT * from products p inner join categories c on p.categorie = c.id where c.categorie='${categorie}'`, (err, rows, fields) => {
    if (err) {
      res.status(500).json({ error: `there is an error : ${err}` })
    }
    const results = JSON.parse(JSON.stringify(rows))
    res.status(200).json(results)
  })
})

// router.put('/updateProduct/:id',upload.single('image'), (req, res) => {
//   const id = req.params.id;
//   const { name, categorie, description} = req.body;
//   const image =req.file.filename; // Handle file upload if necessary

//   const query = 'UPDATE products SET name = ?, categorie = ?, description = ?, image = ? WHERE id = ?';
//   connection.query(query, [name, categorie, description, image, id], (err, result) => {
//     if (err) {
//       return res.status(400).json({ error: err.message });
//     }
//     res.status(200).json({ message: 'Product updated successfully', result });
//   });
// });


router.put('/updateProduct/:id',upload.single('image'), (req, res) => {
  const id = req.params.id;
  const { name, categorie, description} = req.body;

  const image =req.file.originalname; // Handle file upload if necessary

  const query = `UPDATE products SET image = ?,  name = ? , categorie = ? , description = ? WHERE id = ?`;
  connection.query(query, [image,name, categorie, description, id], (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json({ message: 'Product updated successfully', result:result });
  });
});


router.post('/add-product', upload.single('image'), (req, res) => {
  const { name, categorie, description } = req.body;
  const image = req.file.originalname; // Multer stores the uploaded file's name

  // SQL query to insert the product into the database
  const query = `INSERT INTO products (name, categorie, description, image) VALUES (?, ?, ?, ?)`;
  connection.query(query, [name, categorie, description, image], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Product added successfully!', product: result });
  });
  // console.log(req.body)
  // console.log(req.file)
})

router.delete('/delete-product', (req, res) => {
  const id = req.body.id
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }
  const query = `delete from products where id=?`
  connection.query(query, [id], (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message })
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'product deleted succesfully', product: result })
  })
})


router.get('/product-content/:id',(req,res)=>{
  const id = req.params.id
  const query = `SELECT p.id as id , p.image as product_image , p.description as product_description , p.name as product_name , pc.id as pc_id 
  , pc.description as pc_description , pc.header as pc_header ,pc.image as pc_image , c.categorie as product_categorie from products p left join aditional_content pc on p.id = pc.product_id 
  left join categories c on c.id = p.categorie where pc.product_id = ? `
  connection.query(query , [id] , async (err ,result)=>{
    if(err){
      return res.status(400).json({message:`error , ${err}`})
    }
    if(result.length===0){
      const product = await axios.get(`http://localhost:4000/getProduct/${id}`)
      return res.status(200).json(product.data)
    }
    res.status(200).json(result)
  })
})

router.post('/product-content/:id',upload.single('image'),(req,res)=>{
  const id= req.params.id
  const {header , description } = req.body
  let image = ''
  if(req.file){
    image=req.file.originalname
  }
  
  const query = `INSERT INTO aditional_content (product_id,header,description,image) VALUES(?,?,?,?)`
  connection.query(query,[id,header,description,image],(err,result)=>{
    if(err){
      return res.status(400).json({error:`error : ${err}`})
    }
    res.status(200).json(result)
  })
})

router.get(`/product/quick_detail/:id`,(req,res)=>{
  const id =req.params.id
  const query = `SELECT * from quick_detail q inner join products p on p.id = q.product_id where q.product_id = ?`
  connection.query(query,[id],(err,result)=>{
    if(err){
      return res.status(400).json({error:`error : ${err}`})
    }
    if(result.length===0){
      return res.status(202).json({test:false})
    }
    res.status(200).json({...result,test:true})
  })
})

// router.post('/product/quick_detail/:id',(req,res)=>{
//   const id =req.params.id
//   const {min_order_quantity,supply_ability,port,payment_terms,packaging_details,place_of_origin,processing_type,form,use_for
//     ,supply_type,brand_name,price,cultivation_type,main_ingredient}=req.body
//   const query = `INSERT INTO quick_detail (min_order_quantity,product_id,supply_ability,port,payment_terms,packaging_details,place_of_origin,processing_type,form,use_for
//     ,supply_type,brand_name,price,cultivation_type,main_ingredient) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
//   connection.query(query,[min_order_quantity,id,supply_ability,port,payment_terms,packaging_details,place_of_origin,processing_type,form,use_for
//     ,supply_type,brand_name,price,cultivation_type,main_ingredient],(err,result)=>{
//       if(err){
//         return res.status(400).json({error : `error : ${err}`})
//       }
//       res.status(200).json(result)
//     })
// })

router.post('/product/quick_detail/:id', (req, res) => {
  const id = req.params.id;
  const {
    min_order_quantity, supply_ability, port, payment_terms, packaging_details,
    place_of_origin, processing_type, form, use_for, supply_type, brand_name,
    price, cultivation_type, main_ingredient
  } = req.body;

  const query = `
    INSERT INTO quick_detail (
      min_order_quantity, product_id, supply_ability, port, payment_terms, packaging_details, 
      place_of_origin, processing_type, form, use_for, supply_type, brand_name, price, 
      cultivation_type, main_ingredient
    ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;  // No extra comma at the end

  connection.query(query, [
    min_order_quantity, id, supply_ability, port, payment_terms, packaging_details, 
    place_of_origin, processing_type, form, use_for, supply_type, brand_name, 
    price, cultivation_type, main_ingredient
  ], (err, result) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(400).json({ error: 'Failed to insert product details' });
    }
    res.status(201).json(result);
  });
});




module.exports = router