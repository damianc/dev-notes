# Two-Way Maps

```
let Mode;
(function (Mode) {
  Mode[Mode['On'] = 0] = 'On';
  Mode[Mode['Off'] = 1] = 'Off';
})(Mode || (Mode = {}));

// Mode = { 0: 'On', 1: 'Off', On: 0, Off: 1 }
```

this is what TypeScript compiler shall output for the following enum:

```
enum Mode {
  On,
  Off
}
```

## TypeScript Enums in Compiled JavaScript

```
enum Activity {
  Online = 1,
  Offline
}

enum Role {
  Admin = 'ADMIN',
  Guest = 'GUEST'
}
```

output:

```
var Activity;
(function (Activity) {
    Activity[Activity["Online"] = 1] = "Online";
    Activity[Activity["Offline"] = 2] = "Offline";
})(Activity || (Activity = {}));

var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
```