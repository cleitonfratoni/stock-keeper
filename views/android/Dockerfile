# # Use a imagem base do Node.js
# FROM node:16

# # Defina o diretório de trabalho no contêiner
# WORKDIR /app

# # Copie o package.json e o package-lock.json
# COPY package.json package-lock.json ./

# # Instale as dependências do frontend
# RUN npm install

# # Instale o expo-cli e @expo/ngrok globalmente
# RUN npm install --global expo-cli
# # RUN echo "yes" | npm install -g expo-cli @expo/ngrok

# # Verifique a instalação do expo-cli e @expo/ngrok
# RUN npx expo --version
# RUN npm list -g @expo/ngrok

# # Adicionar comando para listar arquivos e diretórios
# RUN ls -al /app

# # Copie o restante do código do frontend
# COPY . .

# # Exponha a porta que o frontend irá rodar
# EXPOSE 19000

# # Comando para iniciar o servidor Expo
# # CMD ["npx", "expo", "start", "--tunnel"]
# CMD ["npx", "expo", "start"]

################################################################################################################################################################################################################

# Use a imagem base do Node.js
FROM node:20.13.0

# Defina nosso ambiente Node.js como produção
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Portas que serão expostas
EXPOSE 19006 19001 19002

# Configuração do host do packager do React Native
ENV REACT_NATIVE_PACKAGER_HOSTNAME="100.66.4.158"

# Defina variável de ambiente para modo não-interativo
ENV EXPO_CLI_NON_INTERACTIVE=true

# Instale o npm e o expo-cli globalmente
RUN npm install -g npm@latest expo-cli@latest
RUN echo "y" | npm install -g @expo/ngrok@^4.1.0
RUN echo "y" | npx expo-cli config --global

# Instale o ngrok necessário para tunnels Expo
# RUN yarn add @expo/ngrok@^4.1.0
RUN yarn global add @expo/ngrok@^4.1.0

# Crie o diretório de trabalho e copie os arquivos do projeto
WORKDIR /opt/my-app
COPY package.json package-lock.json ./
COPY . .

# Comando para iniciar o servidor Expo
CMD ["npx", "expo", "start", "--tunnel"]
