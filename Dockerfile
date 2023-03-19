FROM node:latest

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . .


RUN npm install -g serve

CMD [ "serve", "-s" , "build", "-l", "8080" ]

EXPOSE 8080