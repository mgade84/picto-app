FROM node:12

# Client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install --silent

COPY client/public ./public
COPY client/src ./src
RUN npm run build

# Server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --silent

COPY server/server.js ./

ENV PORT=8080
EXPOSE 8080

CMD [ "npm", "start", "dummyKey" ]
