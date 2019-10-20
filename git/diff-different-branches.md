# Comparing Files from 2 Different Branches

* `git diff branch master [-- <file>]`

```
git diff feature/newsletter-widget master -- config.json
```

* branches can be separated with `..`

```
git diff feature/newsletter-widget..master -- config.json
```

* in the latter case, if either branch is `HEAD`, it can be omitted

```
git diff ..master -- config.json
```

* `..` vs. `...`

| `sth..master` | `sth...master` |
|------|-------|
| changes between the tips of the _sth_ and the _master_ branches | changes that occurred on the _master_ branch since when the _sth_ branch was started off it |
