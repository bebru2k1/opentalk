FROM node:20-alpine
WORKDIR /app

RUN npm install pnpm -g && npm install pm2 -g 

COPY ./package*.json ./

RUN pnpm install

COPY . /app

RUN pnpm build

EXPOSE 8000

CMD ["pm2-runtime", "ecosystem.config.js"]