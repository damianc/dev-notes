# Matching Emoji in RegExp

`\p{Emoji}` + `u` flag

* Example:

```
function countEmoji(input) {
  const c = input.match(
    /\p{Emoji}/gu
  );

  return (c || []).length;
}


countEmoji('xd 😱🤠 hehe 🙃 🤕')
// 4

countEmoji('źć auuu')
// 0

countEmoji('x🐍x')
// 1

countEmoji('👍')
// 1
```

## `\P{Emoji}`

To match all but emoji use `\P{Emoji}`:

```
function leaveOnlyEmoji(input) {
  return input.replace(
    /\P{Emoji}/gu, ''
  );
}


leaveOnlyEmoji('xd 😱🤠 hehe 🙃 🤕')
// '😱🤠🙃🤕'

leaveOnlyEmoji('źć auuu')
// ''

leaveOnlyEmoji('x🐍x')
// '🐍'

leaveOnlyEmoji('👍')
// '👍'
```