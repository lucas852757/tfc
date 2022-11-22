FROM node:16.14-alpine
WORKDIR /app-backend
COPY  pack* ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]