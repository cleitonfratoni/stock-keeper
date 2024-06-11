const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const { Model } = require('sequelize');
const models=require('./models');
const QRCode = require('qrcode');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// // Criando o INSERT do CRUD
let user=models.User;
let product=models.Product;
let stock = models.Stock;


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

// Adiciona ao Stock
app.post('/stock/addtostock', async (req, res) => {
    try {
        const { productName, inOut, qtd } = req.body;
    
        // Encontre o produto pelo nome
        const product = await models.Product.findOne({ where: { productName } });
        if (!product) {
          return res.status(404).send('Produto não encontrado');
        }
    
        // Obtenha o id do produto
        const productId = product.id;
    
        // Verifique a quantidade atual do produto no estoque
        const totalStock = await stock.getTotalStockByProduct();
        const productStock = totalStock.find(item => item.productName === productName);
        const currentQuantity = productStock ? productStock.qtd_total : 0;
    
        // Se for uma saída (inOut = false), verifique se há quantidade suficiente no estoque
        if (!inOut && currentQuantity < qtd) {
          return res.status(400).send('Quantidade insuficiente no estoque');
        }
    
        // Adicione a entrada/saída ao estoque
        await stock.create({
          fk_idProduct: productId,
          inOut,
          qtd
        });
        res.status(201).send('Produto adicionado ao estoque com sucesso');
      } catch (error) {
        console.error('Error adding to stock:', error);
        res.status(500).send('Erro ao adicionar o produto ao estoque');
      }
});

// Buscar nomes de usuários
app.get('/user/usernames', async (req, res) => {
    try {
        const usernames = await user.findAll({
            attributes: ['id', 'username']
        });
        res.status(200).send(usernames);
    } catch (error) {
        console.error('Error fetching user names:', error);
        res.status(500).send('Error fetching user names');
    }
});

// deletea usuaer
app.delete('/user/deleteuser/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { password } = req.body; // Receba a senha no corpo da requisição

        console.log(`Attempting to delete user with ID: ${userId}`);

        const userToDelete = await user.findByPk(userId);
        
        if (!userToDelete) {
            console.log(`User with ID: ${userId} not found`);
            return res.status(404).send('User not found');
        }

        if (userToDelete.password !== password) {
            console.log(`Incorrect password for user with ID: ${userId}`);
            return res.status(403).send('Incorrect password');
        }

        await user.destroy({
            where: {
                id: userId
            }
        });

        console.log(`User with ID: ${userId} deleted successfully`);
        res.status(200).send('User deleted successfully');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
});



// Retorna os produtos do banco
app.get('/products/names', async (req, res) => {
    try {
        const names = await product.findAll({
            attributes: ['productName']
        });
        res.status(200).send(names);
    } catch (error) {
        console.error('Error fetching product names:', error);
        res.status(500).send('Error fetching product names');
    }
});

// Retorna total dentro do Stock
app.get('/stock/totalstockbyproduct', async (req, res) => {
    try {
      const totalStockByProduct = await stock.getTotalStockByProduct();
      res.status(200).send(totalStockByProduct);
    } catch (error) {
      console.error('Error fetching total stock by product:', error);
      res.status(500).send('Error fetching total stock by product');
    }
});

// Registrar produtos
app.post('/products/registerproducts', async (req, res) => {
    try {
        let productId = '';
        // Criando produto no banco
        await product.create({
            productName: req.body.productName,
            type: req.body.type,
            weight: req.body.weight
        }).then((response) => {
            productId += response.id;
        });
        res.status(201).send({ id: productId });
    } catch (error) {
        console.error('Error registering product:', error);
        res.status(500).send('Error registering product');
    }
});

// Registrar produtos
app.post('/user/registeruser', async (req, res) => {
    try {
        let userId = '';
        // Criando produto no banco
        await user.create({
            username: req.body.username,
            password: req.body.password,
            position: req.body.position
        }).then((response) => {
            userId += response.id;
        });
        res.status(201).send({ id: userId });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

// Alterar a senha do usuário
app.put('/user/changepassword', async (req, res) => {
    try {
        const { username, newPassword } = req.body; // Receba o nome de usuário e a nova senha no corpo da requisição

        console.log(`Tentando alterar a senha do usuário: ${username}`);

        // Encontre o usuário pelo nome de usuário fornecido
        const userToUpdate = await user.findOne({ where: { username } });
        
        if (!userToUpdate) {
            console.log(`Usuário: ${username} não encontrado`);
            return res.status(404).send('Usuário não encontrado');
        }

        // Atualize a senha do usuário no banco de dados
        await userToUpdate.update({ password: newPassword });

        console.log(`Senha alterada com sucesso para o usuário: ${username}`);
        res.status(200).send('Senha alterada com sucesso');
    } catch (error) {
        console.error('Erro ao alterar a senha:', error);
        res.status(500).send('Erro ao alterar a senha');
    }
});


//   PRA NÃO ESQUECER
// Insert do Usuário
app.get('/create',async (req,res)=>{
    let create=await user.create({
        username: "fuboka", 
        password: "penis",
        position: "senior",
        createdAt: new Date(),
        updateAt: new Date()    
    });
    res.send('Usuário criado com sucesso!');
});

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