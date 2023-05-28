FROM node:18-alpine
WORKDIR /app
USER node
COPY /package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npm", "run", "dev", "--host"]