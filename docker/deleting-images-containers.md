# Deleting images and containers

## Images:

```
docker rmi [--force] $(docker images -q [--filter <key>=<value>])
```

## Containers:

```
docker rm $(docker ps -aq [--filter <key>=<value>])
```
