FROM  browserless/chrome:1-puppeteer-19.2.2

ENV NODE_ENV=development

WORKDIR /node

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

WORKDIR /node/app

COPY ./index*.js .

CMD ["node", "./index.js"]