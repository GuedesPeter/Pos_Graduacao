# Utiliza a imagem base do Node.js na versão 16.15.1
FROM node:16.15.1

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho no container
COPY package*.json ./

# Instala as dependências listadas no package.json
RUN npm install

# Copia todos os arquivos do diretório atual para o diretório de trabalho no container
COPY . .

# Expõe a porta 8080 para que o container possa se comunicar com o mundo externo
EXPOSE 8080

# Define o comando para iniciar a aplicação Node.js
CMD ["node", "server.js"]
