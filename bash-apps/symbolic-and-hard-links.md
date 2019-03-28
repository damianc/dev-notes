# [ln] Symbolic and hard links

```
ln [<options>] <target> [<link-name>]
ln [<options>] <target1> ... <targetN> <directory>
```

* **symbolic link** (aka *symlink*) - somewhat a shortcut known from Windows (applies to both files and directories)
* **hard link** - a new reference to the same data on the disk (only applies to files)

## Options

| Option | | Description
|--------|-|------------|
| -b | --backup | In the case of deletion, create a backup of a file. Only works along with `-f` option. |
| -f | --force | Force deleting an existing link to create this one. By default, already existing link is not overriden. |
| -i | --interactive | Confirm any deletion of an existing link. |
| -s | --symbolic | Create symbolic link. By default, hard link is created. |

## Example

```
echo 'abc' > abc.txt
cat abc.txt
>> abc
ln abc.txt _abc
cat _abc
>> abc
echo 'def' > _abc
cat abc.txt
>> def
```
