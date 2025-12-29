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