FROM node:latest
WORKDIR /usr/src/api
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]