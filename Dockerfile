# Use a imagem base do Node.js
FROM node:16

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do backend
RUN npm install

# Instale o nodemon globalmente
RUN npm install -g nodemon

# Copie o restante do código do backend
COPY . .

# Exponha a porta que o backend irá rodar
EXPOSE 3080

# Comando para iniciar o servidor
# CMD ["node", "server.js"]
# Ajuste o nome do arquivo conforme necessário
# CMD ["node", "apiGateway.js"]  

# Comando para iniciar o servidor -> Mudei para iniciar com o comando npx nodemon Controller.js
CMD ["npx", "nodemon", "Controller.js"]