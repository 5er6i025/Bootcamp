
const express= require('express');
const app=express();
app.use(express.json())
const port=3000;

const API_KEY='source'



const apikeyvalidation=(req,res,next)=>{
    const userapikey=req.get('x-api-key');
    if (userapikey && userapikey===API_KEY){
        next();
    } else {
        res.status(401).send('Invalid API key');
    }
};

app.use(apikeyvalidation)



let users = [
    {
        name: "Alice",
        id:"1",
        age: 25,
        email: "alice@example.com",
        city: "New York"
    },
    {
        name: "Bob",
        id: "2",
        age: 30,
        email: "bob@example.com",
        city: "San Francisco"
    },
    {
        name: "Charlie",
        id:"3",
        age: 28,
        email: "charlie@example.com",
        city: "Los Angeles"
    }
];

app.listen(port, ()=>{
    console.log('The app is running')
})

app.get('/Ages', function(req,res){
    return res.send(users.map(email=>email.age))
})


app.get('/Names', function(req,res){
    return res.send(users.map(email=>email.name))
})


app.get('/Emails', function(req,res){
    return res.send(users.map(email=>email.email))
})

app.get('/Cities', function(req,res){
    return res.send(users.map(email=>email.city))
})


app.get('/users', function(req,res){
    const name=req.query.name
    return res.send(users.find(user=>user.name===name))
})


app.get('/Users/:id', function(req,res){
    const id=req.params.id;
    return res.send(users[id])
})

app.get('/All', function(req,res){
    return res.send(users)
})

app.post('/All', function(req,res){
    console.log(req.body)
    users.push(req.body)
    res.status(201)
    return res.send('Informacion enviada')
})

app.put('/All/:id', function(req,res){
    const index=req.params.id-1
    users[index]=req.body
    return res.send('Informacion cambiada')
})

app.delete('/All/:id', function(req,res){
    const index=req.params.id-1;
    users.splice(index)
    return res.send('Informacion eliminada')
})
