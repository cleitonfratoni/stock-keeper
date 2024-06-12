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
let stock = models.Stock;

// Login do usuário
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

// Ver stock
app.get('/stock', async (req, res) => {
    try {
        const stockData = await models.Stock.getTotalStockByProduct();
        res.status(200).json(stockData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).send('Error fetching stock data');
    }
});

// Adicionar/Remover produto ao estoque
app.post('/stock/addtostock', async (req, res) => {
    try {
        const { productName, inOut, qtd } = req.body;

        // Encontrar o produto pelo nome
        const product = await models.Product.findOne({ where: { productName } });

        if (!product) {
            return res.status(404).send('Produto não encontrado');
        }

        // Verificar a quantidade atual no estoque
        const currentStock = await models.Stock.getTotalStockByProduct();

        // Encontrar a quantidade atual do produto específico
        const productStock = currentStock.find(item => item.productName === productName);

        const currentQty = productStock ? productStock.qtd_total : 0;

        // Se for uma retirada e a quantidade atual for menor que a quantidade a ser retirada, retornar erro
        if (inOut === false && currentQty < qtd) {
            return res.status(400).json({ message: 'Quantidade insuficiente no estoque para retirada', currentQty });
        }

        // Adicionar ao estoque
        await models.Stock.create({
            fk_idProduct: product.id,
            inOut,
            qtd
        });

        res.status(201).send('Produto adicionado ao estoque com sucesso');
    } catch (error) {
        console.error('Error adding to stock:', error);
        res.status(500).send('Erro ao adicionar produto ao estoque');
    }
});

// Querry do total de produtos no estoque
app.get('/stock/totalstockbyproduct', async (req, res) => {
    try {
      const totalStockByProduct = await stock.getTotalStockByProduct();
      res.status(200).send(totalStockByProduct);
    } catch (error) {
      console.error('Error fetching total stock by product:', error);
      res.status(500).send('Error fetching total stock by product');
    }
});

// Procurar nome dos produtos dentro da tabela produto
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

// Registrar usuários
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

app.get('/',(req,res)=>{
    res.send('Meu servidor backend já está rodando!');
});

let port=process.env.PORT || 4000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});

// // VALE RELEMBRAR
// app.get('/create',async (req,res)=>{
//     let create=await user.create({
//         username: "usuario",
//         password: "321",
//         position: "user",
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