# `Dockerfile` File

| Command | Purpose | Example | Notes |
|---------|---------|---------|-------|
| `FROM <image>` | a base image the built image is based on | `FROM node:8` | should be the very first command in Dockerfile and used once (in most cases) |
| `MAINTAINER <someone>` | an author of the image | `MAINTAINER John Smith <john.smith@example.com>` | |
| `COPY <src> [...] <dest>` | copies file(s) into Docker image’s file system | `COPY index.html /css www/` | |
| `ADD <src> ... <dest>` | works like COPY, but handles remote resources (accessible via URL) and .tar files | `ADD app-icons.tar /img` | files contained within TAR are extracted into destination path |
| `ENV <name> <value>` | defines an environment variable in the image | `ENV hostname db_store` | |
| `WORKDIR <path>` | changes image’s current working directory to the given path | `WORKDIR /var/www` | if specified directory does not exist, it will be created |
| `EXPOSE <port[/<protocol>]> ...` | opens given port(s) (optionally along with a protocol whose default value is **tcp**) | `EXPOSE 7000/udp` | allows to connect with a service contained in the image |
| `RUN <command>` | executes given command(s) (multiple ones joined with `&` sign) | we can use any command accessible in OS like `mv`, `tar` or `apt-get` |
| `CMD <command>` | like RUN (differences are below) | CMD echo 'Docker service is up...' | |

## `RUN` vs. `CMD`

* `RUN` - executed once when building the image
* `CMD` - executed every time the service is being run

## Example `Dockerfile`

```
# use Node.js v.8
FROM node:8
 
# create app directory
WORKDIR /usr/src/app
 
# copy files
COPY package*.json ./
COPY ./ ./
 
# install Node dependencies
RUN npm install
 
# run the service accessible via port 8080
EXPOSE 8080
CMD "npm start"
```
