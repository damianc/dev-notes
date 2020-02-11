# [Error] zsh: corrupt history file

```
cd ~
mv .zsh_history .zsh_history_bad
strings .zsh_history_bad > .zsh_history
fc -R .zsh_history
rm .zsh_history_bad
```

## Script

```
#!/usr/bin/env zsh

mv ~/.zsh_history ~/.zsh_history_bad
strings ~/.zsh_history_bad > ~/.zsh_history
fc -R ~/.zsh_history
rm ~/.zsh_history_bad
```

* save as `zsh_history_fix` in `~/bin`
* if needed, make it executable: `chmod +x ~/bin/zsh_history_fix`
* when needed, run `zsh_history_fix`

[Source: shapeshed.com](https://shapeshed.com/zsh-corrupt-history-file/)
