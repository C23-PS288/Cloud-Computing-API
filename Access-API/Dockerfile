FROM node:18-alpine3.16

WORKDIR /access_api

COPY . .

RUN npm install

EXPOSE 5000

CMD ["node", "app.js"]