FROM alpine:latest
RUN apk add nodejs npm


WORKDIR /app


COPY . /app


RUN npm install


EXPOSE 3000


ENTRYPOINT ["node"]

CMD ["app.js"]
