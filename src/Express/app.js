import express from 'express';
const app = express();

app.get('/', (req,res)=> {
    res.send('Hello Express!')
});

app.get('/about', (req,res)=> {
    res.send('All About Express!')
});

app.get('/contact', (req,res)=> {
    res.send('Contact Express!')
});

app.get('/product', (req,res)=> {
    res.send('Product Lib!')
});

//? Sign up route
app.post('/sign', (req,res)=>{
    res.send('Register route')
})

app.listen(3000, ()=>{
    console.log(' Server is running on port http://localhost:3000')
})

//Express
app.get('/user/:id', (req, res, next) => {
  console.log('ID:', req.params.id)
  next()
}, (req, res, next) => {
  res.send('User Info')
})
//? Search Route
// app.get('/product/search', (req,res) =>{
//   res.send('Query Starting Demo!')
// })

//! Query string
app.get('/product/search', (req,res) =>{
  res.send('Query Starting Demo!')
  console.log(req.query)
})

app.get('/profile',
  function(req,res){
    console.log(req.query.name)
    res.send()
  }
)
// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', (req, res, next) => {
  res.send(req.params.id)
})
