# Build stage
FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./src/ ./src/
COPY ./public/ ./public/
COPY vue.config.js .
COPY babel.config.js .
RUN NODE_OPTIONS=--max_old_space_size=4096 npm run build

# production stage
FROM nginx:stable-alpine as production-stage
EXPOSE 80
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./app.conf.template /etc/nginx/templates/app.conf.template
CMD ["nginx", "-g", "daemon off;"]
