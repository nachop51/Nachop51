FROM nginx:1.24-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html

RUN apk add certbot certbot-nginx

EXPOSE 80
