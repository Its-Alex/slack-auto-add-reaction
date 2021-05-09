FROM node:16-alpine

ADD src /slack-auto-add-reaction/src/
COPY package.json /slack-auto-add-reaction/package.json

WORKDIR /slack-auto-add-reaction

RUN npm install

CMD [ "/usr/local/bin/node", "/slack-auto-add-reaction/src/index.js" ]