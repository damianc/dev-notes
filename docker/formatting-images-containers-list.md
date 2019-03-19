# Formatting a list of images/containers

## List IDs of Docker images

```
docker images --format "{{.ID}}"
```

## List IDs of Docker containers

```
docker ps -a --format "{{.ID}}"
```

## Placeholders for Docker images

* .ID
* .Repository
* .Tag
* .Digest
* .CreatedSince
* .CreatedAt
* .Size

## Placeholders for Docker containers

* .ID
* .Image
* .Command
* .CreatedAt
* .RunningFor
* .Ports
* .Status
* .Size
* .Names
* .Labels
* .Label "&lt;label&gt;"
* .Mounts
* .Networks
