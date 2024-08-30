# Stage 1: Build the React app
FROM node:18-alpine as build

WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration Nginx pour servir l'application
COPY ./infra/nginx.conf /etc/nginx/conf.d/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]