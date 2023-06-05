FROM node:18-alpine3.16

WORKDIR /dompet_makanan_backend

COPY . .

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]