FROM node:alpine

WORKDIR /usr/app
COPY ./services/user/package.json .
RUN npm install

COPY ./common ../../../common

COPY ./services/user .

ENV NODE_ENV=development

CMD ["npm", "start"]
