FROM golang:1.18.4
LABEL image.authors="huangwh@seas.upenn.edu"

WORKDIR /app
ADD . /app

EXPOSE 8080
CMD ["/usr/local/go/bin/go", "run", "main.go", "user.go", "vision.go"]

