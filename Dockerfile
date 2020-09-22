FROM node:alpine

# Client
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install --silent --production

COPY client/public ./public
COPY client/src ./src
RUN npm run build

# Cleanup
RUN rm -rf node_modules/

# Server
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --silent --production

COPY server/server.js ./

ENV PORT=8080
EXPOSE 8080

CMD ["npm", "start"]
