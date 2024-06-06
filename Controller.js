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

app.get('/stock/totalstockbyproduct', async (req, res) => {
    try {
      const totalStockByProduct = await stock.getTotalStockByProduct();
      res.status(200).send(totalStockByProduct);
    } catch (error) {
      console.error('Error fetching total stock by product:', error);
      res.status(500).send('Error fetching total stock by product');
    }
});

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