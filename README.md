# Seminar 2

## Directory structure

 - 🌐 `frontend` - Next.js frontend application
 - 💻 `backend` - Java Spring boot backend application

## Installation and running

### Build

Building the backend:

```shell
$ chmod u+x backend/build.sh
$ ./backend/build.sh
```

### Run

Running the entire application cluster:

```shell
$ docker compose up
```


## Development

Restarting backend with newly built image:

```shell
$ docker compose up -d --build sem2-backend
```