# Find the commit a bug has been introduced in

## Custom script (hunter.sh)

* exit with code 0 if things are ok
* exit with code 1+ if things are not ok

```
#!/bin/sh
# check if jquery.js if present in js/ directory
 
OUTPUT="$(ls js | grep jquery.js)"
 
if test -z "$OUTPUT" 
then
      exit 0
else
      exit 1
fi
```

##  `git bisect` command

```
git bisect start <BAD_REF> <GOOD_REF>
git bisect run ./hunter.sh
```

### Finish work

```
git bisect reset
git checkout master
```

### View the commit

```
git show <REF>
```
