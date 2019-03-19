# Filtering a list of images/containers

## Only list untagged images (a.k.a. *dangling images*)

```
docker images (-f|--filter) "dangling=true"
```

## Only list currently paused containers

```
docker ps (-f|--format) status=paused
```

## Filters for Docker images

* dangling=(true|false)
* label=&lt;key&gt;[=&lt;value&gt;]
* before=(&lt;image-name&gt;[:&lt;tag&gt;]|&lt;image-id&gt;|&lt;image@digest&gt;)
* since=(&lt;image-name&gt;[:&lt;tag&gt;]|&lt;image-id&gt;|&lt;image@digest&gt;)
* reference=&lt;pattern&gt;

### Examples of filtering images

| Example command | Description |
---------------------------------
| `docker images --filter "before=mock"` | images created before the image named `mock` |
| `docker images --filter reference='pub*:app*'` | images whose repository name starts with *pub* and whose tag name starts with *app* |
| `docker images --filter reference='*:*alpha'` | images whose tag name ends with *alpha* |

## Filters for Docker containers

* id=&lt;ID&gt;
* name=&lt;name&gt;
* label=&lt;key&gt;[=&lt;value&gt;]
* exited=&lt;exit-code&gt;
* status=(created|restarting|running|removing|paused|exited|dead)
* ancestor=(&lt;image-name&gt;[:&lt;tag&gt;]|&lt;image-id&gt;|&lt;image@digest&gt;)
* (before|since)=(&lt;container-id&gt;|&lt;container-name&gt;)
* volume=(&lt;volume&gt;|&lt;path&gt;)
* network=&lt;network&gt;
* (publish|expose)=(&lt;port&gt;[/&lt;protocol&gt;]|&lt;startport-endport&gt;/[&lt;protocol&gt;])
* health=(starting|healthy|unhealthy|none)
* isolation=(default|process|hyperv)
* is-task=(true|false)

### Examples of filtering containers

| Example command | Description |
---------------------------------
| `docker ps --filter "label=color"` | containers with the `color` label assigned (regardless of its value) |
| `docker ps --filter "label=color=red"` | containers with the `color` label whose value is `red` |
| `docker ps --filter before=app` | containers created before the container named `app` |
| `docker ps --filter since=app` | containers created since the container named `app` |

