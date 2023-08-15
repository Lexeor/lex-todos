# syntax=docker/dockerfile:1

FROM node:18-alpine as builder
RUN mkdir /code
WORKDIR /code
COPY package-lock.json ./
COPY package-cloud.json ./package.json
RUN npm i
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf