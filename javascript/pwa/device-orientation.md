# Device Orientation

```
window.ondeviceorientation = e => {
  console.log(
    e.alpha,
    e.beta,
    e.gamma
  );
};
```

![Device Axes](https://github.com/damianc/dev-notes/blob/master/_images/javascript/dm-axes.png)

| Property | Description | Value |
|--|--|--|
| `alpha` | the motion of the device around the **z** axis | $[0;360)$ |
| `beta` | the motion of the device around the **x** axis | $[-180;180)$ |
| `gamma` | the motion of the device around the **y** axis | $[-90;90)$ |

## `beta`

![Device beta](https://github.com/damianc/dev-notes/blob/master/_images/javascript/dm-beta.png)

## `gamma`

![Device gamma](https://github.com/damianc/dev-notes/blob/master/_images/javascript/dm-gamma.png)
