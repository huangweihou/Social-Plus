FROM golang:1.18.4-alpine as builder
WORKDIR /src
ADD . /src
RUN go build -o /app main.go user.go vision.go

FROM alpine:3.16
WORKDIR /app
COPY --from=builder /app /app
CMD "./app"