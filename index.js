

const { urlencoded } = require('express');
const express = require ('express');
const app = express();
const recipes = require('./recipes');

app.use(express,urlencoded({extended:true}));
 app.use(express.json())



app.get('/api/recipes',(req,res)=>{
    res.json(recipes)
})


app.post('/api/recipes',(req,res)=>{
    const newRecipe = {
        name:req.body.name,
        category:req.body.category,
        time:req.body.time
    }
    recipes.push(newRecipe);
    res.json(recipes);
})
app.listen (3000,()=>{
    console.log("It is working")
})