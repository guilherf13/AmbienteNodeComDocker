FROM node:18-alpine
WORKDIR /app
#RUN groupadd -r user && useradd -r -g user user
#USER user
COPY /package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npm", "run", "dev", "--host"]