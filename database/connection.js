const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bioprogreen',
  port:'3309'
})

// connection.connect();

// connection.query('SELECT * from categories',(err,rows,feilds)=>{
//     console.log('results are : ',rows)
// })

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//     if (err) throw err
  
//     console.log('The solution is: ', rows[0].solution)
//   })

// connection.end()

module.exports=connection