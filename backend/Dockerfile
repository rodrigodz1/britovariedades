FROM node:10.19.0

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

EXPOSE 3333

# Launch application
CMD ["npm","start"]

COPY . .