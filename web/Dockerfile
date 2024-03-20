FROM node:16 as dev

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN --mount=type=cache,target=./node_modules/.cache/webpack npm run build

FROM bitnami/nginx
COPY --from=dev /usr/src/app/build /app
RUN echo "hello"
EXPOSE 8080