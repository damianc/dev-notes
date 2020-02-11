# [Error] System limit for number of file watchers reached

The following command most probably will help:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
