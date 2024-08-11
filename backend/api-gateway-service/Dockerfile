# Use the official Golang image as the base image
FROM golang:1.22 AS builder

WORKDIR /app

COPY . .

RUN go mod download && go mod verify

COPY . .
RUN go build -v -o /usr/local/bin/app ./...

CMD ["app"]