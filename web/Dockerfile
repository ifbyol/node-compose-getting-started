FROM node:16 as dev

WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY . .
RUN --mount=type=cache,target=./node_modules/.cache/webpack npm run build

RUN echo "hi!"

FROM bitnami/nginx
COPY --from=dev /usr/src/app/build /app
EXPOSE 8080