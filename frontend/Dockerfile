FROM node:16-alpine

WORKDIR /react-vite-app

EXPOSE 5173

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]