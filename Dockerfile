FROM node:18-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY tsconfig.json .

EXPOSE 8000

CMD ["npm", "start"]