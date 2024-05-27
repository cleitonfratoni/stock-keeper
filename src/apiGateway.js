import axios from 'axios';

// Define a URL base do seu backend. Todas as requisições feitas usando a instância `api` usarão essa URL base.
const API_BASE_URL = 'http://100.66.4.150:4000';

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

// Exporta a função para ser usada em outros módulos
export { authenticateUser };
