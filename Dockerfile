FROM nginx:latest
ADD ./src/ /usr/share/nginx/html/
COPY ./conf/etc/nginx/default.conf /etc/nginx/conf.d/