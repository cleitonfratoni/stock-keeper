# # Use a imagem base do Node.js
# # FROM node:16
# FROM node:20.13.0


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
# # RUN npm list -g @expo/ngrok

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

# # Use a imagem base do Node.js
# FROM node:20.13.0

# ARG NODE_ENV=production
# ENV NODE_ENV $NODE_ENV

# # default to port 19006 for node, and 19001 and 19002 (tests) for debug
# ARG PORT=19006
# ENV PORT $PORT
# EXPOSE 19006 19001 19002
# # add in your own IP that was assigned by EXPO for your local machine
# # ENV REACT_NATIVE_PACKAGER_HOSTNAME="10.0.0.114"

# # install global packages
# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# ENV PATH /home/node/.npm-global/bin:$PATH
# RUN npm i --unsafe-perm -g npm@latest expo-cli@latest @expo/ngrok@^4.1.0
# RUN apt-get update && apt-get install -y qemu-user-static
# #We need to install this inorder to start a tunnel on the docker conatiner
# RUN yarn add @expo/ngrok

# # install dependencies first, in a different location for easier app bind mounting for local development
# # due to default /opt permissions we have to create the dir with root and change perms
# RUN mkdir /opt/my-app && chown root:root /opt/my-app
# WORKDIR /opt/my-app
# ENV PATH /opt/my-app/.bin:$PATH
# USER root
# # COPY package.json package-lock.json ./
# COPY --chown=node:node package.json ./
# COPY --chown=node:node package-lock.json ./
# USER node
# # RUN npm install
# # RUN yarn install


# # copy in our source code last, as it changes the most
# WORKDIR /opt/my-app
# # for development, we bind mount volumes; comment out for production
# COPY . /opt/my-app/


# CMD ["npx","expo", "start", "--tunnel"]

# RUN docker logs -f stock-keeper-frontend-run-3cdd5c026e0e

#####################################################################################################

# # Use uma imagem oficial do Node.js como base
# FROM node:20


# ENV EXPO_CLI_NON_INTERACTIVE=true
# ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.168.1.190"

# # Instale o Expo CLI globalmente
# RUN npm install -g expo-cli

# RUN npm install -g expo-cli @expo/ngrok

# # Defina o diretório de trabalho dentro do container
# WORKDIR /app


# # Copie o package.json e package-lock.json para o diretório de trabalho
# COPY package*.json ./

# # Instale as dependências
# RUN npm install

# # Copie o restante do código da aplicação para o diretório de trabalho
# COPY . .

# # Exponha a porta que sua aplicação irá rodar (normalmente 19000 para Expo)
# EXPOSE 8081

# # Comando para iniciar a aplicação
# # CMD ["npm", "start"]
# CMD ["npx", "expo", "start", "--lan", "--non-interactive"]

#####################################################################################################



# # Use a imagem base do Node.js
# FROM node:20.13.0

# # Defina nosso ambiente Node.js como produção
# ARG NODE_ENV=production
# ENV NODE_ENV $NODE_ENV

# # Portas que serão expostas
# EXPOSE 19000 19001 19002 8081

# # Configuração do host do packager do React Native
# ENV REACT_NATIVE_PACKAGER_HOSTNAME="100.66.4.158"

# # Defina variável de ambiente para modo não-interativo
# ENV EXPO_CLI_NON_INTERACTIVE=true

# # Instale o npm e o expo-cli globalmente
# RUN npm install -g npm@latest expo-cli@latest

# # Crie o diretório de trabalho e copie os arquivos do projeto
# WORKDIR /opt/my-app
# COPY package.json package-lock.json ./

# # Instale as dependências do projeto
# RUN npm install


# # Copie o restante dos arquivos do projeto
# COPY . .

# # Comando para iniciar o servidor Expo e exibir QRCode
# CMD ["npx", "expo", "start", "--lan", "--non-interactive"]



#################################################################################################

# Use uma imagem oficial do Node.js como base
FROM node:20

# Instale o Expo CLI globalmente
RUN npm install -g expo-cli

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que sua aplicação irá rodar (normalmente 19000 para Expo)
EXPOSE 8081

# Comando para iniciar a aplicação
CMD ["npx", "expo", "start"]