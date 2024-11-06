# Dockerfile para la aplicación Node.js
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
