# Count Particular Files Excluding a Particular Directory

Count files with `.md` extension everywhere except for `.git` directory:

```
find -type f -name '*.md' | grep -v "\.git" | wc -l
```

> `-v` option of `grep` command select non-matching lines