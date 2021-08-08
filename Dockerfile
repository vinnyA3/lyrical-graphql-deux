FROM node:fermium-alpine

WORKDIR /usr/src/app

RUN mkdir client server

COPY client/ ./client
COPY server/ ./server
COPY package* *.js ./

EXPOSE 4000 

RUN npm install

CMD npm run dev
