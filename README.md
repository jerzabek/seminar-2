# Seminar 2

## Directory structure

 - 🌐 `frontend` - Next.js frontend application
 - 💻 `backend` - Java Spring boot backend application

## Installation and running

### Build

Both backend and frontend services are containerized using Docker. To build all necessary images run:

```shell
$ docker compose build
```

### Run

Running the application:

```shell
$ docker compose up
```

Once started the application will be available at the URL `http://localhost:5560`.

## Development

Restarting backend with newly built image:

```shell
$ docker compose up -d --build sem2-backend
```
