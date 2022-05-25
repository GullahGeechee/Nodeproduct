//loading express
const express = require('express');

//calling app/creating the app 
const app = express();
const port = 3000;

const selectedproducts = require('./models/products')
const getdata = require('./controller/getdata')
const productsdata = getData()

// Middleware functions
// they update the request as soon as they come in.
app.use((req, res, next) => {
    console.log(`Running middleware function!!!`);
    next(); // got to the next middleware or to the response
  });
  // JSON Middleware
  app.use(express.json())
  // if we dont need to read data from the url 
  app.use(express.urlencoded({extended: false}))





// set up view engine 
app.set('view engine', 'ejs')
app.set('views', './views')

//checking top make sure everything is working 
app.get('/', (req,res) => {
     res.send(`You got game on yo'phone`)

})

app.get('/home', (req,res) => {
    res.render('home', {pageTitle: 'Home Page', pageHeader: 'My Products Page'})
})

app.get('/products', (req,res) => {
     res.render('products',{pageTitle: 'All products', pageHeader: 'my products', data: productsdata} )
 })

app.get('/products/new' , (req, res) => {
    res.render('newproducts')
})

app.post('/products', (req, res) => {
    console.log(req)

    getdata.push(req.body)
    res.redirect('/products')
})



 app.post('/products',(req,res) => {
    console.log(req.body);
})

// it broke here 
app.post('/products',(req, res) => {
    console.log(req.body)
     products.push(req.body)
})



app.get('/product/:id',(req, res) => {
    const result = productsdata.filter(item => item.id === Number(req.params.id))    
    console.log(result)  
    res.render('searchproducts',{productsdata:result[0]})
    // res.send(result)
})





//always last 
app.listen(port,() => {
    console.log(`Run forest!`)

})