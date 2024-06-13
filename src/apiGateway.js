import axios from 'axios';

// Define a URL base do seu backend. Todas as requisições feitas usando a instância `api` usarão essa URL base.
const API_BASE_URL = 'http://172.20.10.14:4000';

// Cria uma instância do axios com a URL base configurada e um timeout opcional.
const api = axios.create({
  baseURL: API_BASE_URL,  // URL base para todas as requisições
  timeout: 10000,         // Tempo máximo de espera para uma requisição (em milissegundos)
});

// Função para autenticar o usuário, enviando uma requisição POST para o endpoint '/login'
const authenticateUser = async (username, password) => {
  try {
    // Faz uma requisição POST para 'https://sua-api.com/login'
    const response = await api.post('/login', {
      username,  // Corpo da requisição contendo o nome de usuário
      password,  // Corpo da requisição contendo a senha
    });
    // Retorna os dados da resposta
    console.log(response.data);
    return response.data;
  } catch (error) {
    // Loga o erro e lança uma exceção
    console.error('Error authenticating user:', error);
    throw error;
  }
};

// Função para adicionar um produto, enviando uma requisição POST para o endpoint '/products'
const registerProduct = async (product) => {
  try {
    const response = await api.post('/products/registerproducts', product);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering product:', error);
    throw error;
  }
};

// Função para adicionar um usuário, enviando uma requisição POST para o endpoint '/user'
const registerUser = async (user) => {
  try {
    const response = await api.post('/user/registeruser', user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// Função para buscar os nomes dos produtos
const getProductNames = async () => {
  try {
    const response = await api.get('/products/names');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product names:', error);
    throw error;
  }
};

// Função para buscar os nomes dos usuários
const getUsernames = async () => {
  try {
    const response = await api.get('/user/usernames');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user names:', error);
    throw error;
  }
};

// Função para deletar um usuário
const deleteUser = async (userId, password) => {
  try {
    const response = await api.delete(`/user/deleteuser/${userId}`, {
      data: { password }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Função para mudar a senha do usuário
const changePasswordByUsername = async (username, newPassword) => {
  try {
      const response = await api.put('/user/changepassword', {
          username,
          newPassword
      });
      console.log(`Toma sua safada: ${response.data}`);
      return response.data; // Altere isso se a API retornar apenas 'Senha alterada com sucesso'
  } catch (error) {
      throw error;
      // Se o erro for 404 e o texto da mensagem de erro contiver "not found",
      // retornaremos uma mensagem indicando que o usuário não foi encontrado.
      // if (error.response && error.response.status === 404 && error.response.data.includes('not found')) {
      //     return 'Usuário não encontrado';
      // } else {
      //     // Se o erro não for relacionado a usuário não encontrado, lançamos o erro novamente
      //     console.error('Error changing password:', error);
      //     throw error;
      // }
  };
}

// Função para adicionar estoque
const addToStock = async (stockData) => {
  try {
    const response = await api.post('/stock/addtostock', stockData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para buscar dados do estoque
const getStockData = async () => {
  try {
    const response = await api.get('/stock');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Exporta a função para ser usada em outros módulos
export { 
  authenticateUser,
  registerProduct,
  getProductNames,
  addToStock,
  getStockData,
  registerUser,
  getUsernames,
  deleteUser,
  changePasswordByUsername
 };
