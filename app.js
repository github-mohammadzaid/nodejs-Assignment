const express = require("express");
require("./conn");
const product = require("./products");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.post("/products",async(req,res) => {
    
    try{
        const user = new product(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    }catch(e)
    {
        res.status(400).send(e);
    }

    
})




app.get("/products",async(req,res) => {
    try{
        const productData = await product.find();
        res.send(productData);
    }catch(e){
        res.send(e);
    }
})



app.get("/products/:id",async(req,res) => {
    try{
        const _id =  req.params.id;
        const productData = await product.findById(_id);
        res.send(productData);
    }catch(e){
        res.send(error);
    }
})



app.patch("/products/:id",async(req,res) => {
    try{
        const _id =  req.params.id;
        const updateproduct = await product.findByIdAndUpdate(_id,req.body, {
            new : true
        });
        res.send(updateproduct);
    }catch(e){
        res.status(404).send(error);
    }
})



app.delete("/products/:id",async(req,res) => {
    try{
        
        const deleteproduct = await product.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteproduct);
    }catch{
        res.status(500).send(error);
    }
})

app.listen(port, () => { 
    console.log(`connection is setup ${port}`);
})

