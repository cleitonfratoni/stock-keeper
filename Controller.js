const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { Model } = require('sequelize');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// // Criando o INSERT do CRUD
let user=models.User;
let product=models.Product;
let stock=models.stock;

app.post('/login',async(req,res)=>{
    let response=await user.findOne({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    });
    // Caso errado, a query retorna NULL, por isso desse IF
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
});

let port=process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando');
});

// //   PRA NÃO ESQUECER
// // Insert do Usuário
// app.get('/create',async (req,res)=>{
//     let create=await user.create({
//         username: "mathgoms", 
//         password: "Qazdehau123@",
//         createdAt: new Date(),
//         updateAt: new Date()    
//     });
//     res.send('Usuário criado com sucesso!');
// });

// // Criando o SELECT do CRUD
// app.get('/read',async(req,res)=>{
//     let read=await user.findAll({
//         raw:true,
//     })
//     console.log(read);
// });

// // // Criando UPDATE do CRUD a partir da foreing key (deu errado)
// // app.get('/update_fk',async(req,res)=>{
// //     let update=await user.findByPk(1,
// //     {include:[{all:true}]}
// //     ).then((response)=>{

// //         console.log(response);
// //     });
// // });


// // Criando o DELETE do CRUD
// app.get('/delete',async(req,res)=>{
//     user.destroy({
//         // Vai deleter o usuário, onde o ID é 2
//         where:{
//             id:2
//         }
//     })
// });