FROM node:16.14-alpine
WORKDIR /app-frontend
COPY pack* ./
RUN  npm install
COPY . .
CMD [ "npm", "start" ]
