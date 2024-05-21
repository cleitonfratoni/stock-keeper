const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let product=models.Product;
let stock=models.Stock;

app.post('/login', async (req, res)=>{
    let response = await user.findOne({
        where:{
            username: req.body.username,
            password: req.body.password
        }
    });
    if(response === null){
        res.send(JSON.stringify('error'))
    }else{
        res.send(response);
    };
});

app.get('/',(req,res)=>{
    res.send('Meu servidor backend já está rodando!');
});

let port=process.env.PORT || 4000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});

// VALE RELEMBRAR
// app.get('/create',async (req,res)=>{
//     let create=await user.create({
//         username: "fuboka",
//         password: "123",
//         position: "admin",
//         createdAt: new Date(),
//         updatedAt: new Date()
//     });
//     res.send('Usuário criado com sucesso!')
// });

// app.get('/read', async (req,res)=>{
//     let read=await user.findAll({ raw:true });
//     console.log(read);
// });

// app.get('/update', async (req,res)=>{
//     let update=await user.findByPk(4).then((response)=>{
//         response.name='fubokinha';
//         response.password='abc123';
//         response.save();
//     })
// });

// app.get('/delete', async (req,res)=>{
//     user.destroy({
//         where: {id:4}
//     })
// })