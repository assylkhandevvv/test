FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./client/package*.json ./

RUN npm install

COPY ./client .

RUN npm run build

CMD [ "npm", "run", "start" ]