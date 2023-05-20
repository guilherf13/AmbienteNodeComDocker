FROM node:latest
COPY package*.json /app
RUN /bin/sh -c npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]