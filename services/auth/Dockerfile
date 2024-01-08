FROM node:alpine

WORKDIR /usr/app
COPY ./services/auth/package.json .
RUN npm install

COPY ./common ../../../common

COPY ./services/auth .

ENV NODE_ENV=development

CMD ["npm", "start"]
