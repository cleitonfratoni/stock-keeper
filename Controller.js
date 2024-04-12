const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let user=models.User;
let product=models.Product;
let stock=models.Stock;

app.get('/create',async (req,res)=>{
    let create=await user.create({
        name: "teste",
        password: "abc",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    res.send('Usuário criado com sucesso!')
});

app.get('/read', async (req,res)=>{
    let read=await user.findAll({ raw:true });
    console.log(read);
});

app.get('/update', async (req,res)=>{
    let update=await user.findByPk(4).then((response)=>{
        console.log(response);
    })
});


app.get('/',(req,res)=>{
    res.send('Meu servidor backend já está rodando!');
});

let port=process.env.PORT || 4000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
