# Battery Events

## Getting Battery Info

```
navigator.getBattery().then(manager => {
  viewBatteryState(manager);
  manager.onchargingchange = ({ target }) => viewBatteryState(target);

  function viewBatteryState(batt) {
    console.log('Battery charging:', batt.charging);
    console.log('Battery level:', batt.level * 100);
  };
});
```

> `addEventListener()` method can be used as well:  `manager.addEventListener('chargingchange', ...)`

### With `async/await`

```
(async function() {
  const batt = await navigator.getBattery();

  viewBatteryState(batt);
  batt.onchargingchange = ({ target }) => viewBatteryState(target);

  function viewBatteryState(batt) {
    console.log('Battery charging:', batt.charging);
    console.log('Battery level:', batt.level * 100);
  };
})()
```

## Battery Events

* `onlevelchange`
* `onchargingchange`
* `onchargingtimechange`
* `ondischargingtimechange`

## [Dis]Charging Time

```
(async function() {
  const batt = await navigator.getBattery();

  // get the time that remains to load full battery (when charging)
  batt.onchargingtimechange = ({ target }) => viewChargingTime(target, 0);

  // get the time computer is to work for (when not charging)
  batt.ondischargingtimechange = ({ target }) => viewChargingTime(target, 1);

  function viewChargingTime(batt, dir) {
    const secs = [batt.chargingTime, batt.dischargingTime][dir];
    if (secs === Infinity) return;

    const time = (secs / 60 / 60).toFixed(2);

    let [h, m] = time.split('.');
    m = Math.round(60 * ((+m).toFixed(2) / 100));
    if (m < 10) m = '0' + m;

    console.log(['charging', 'discharging'][dir]);
    console.log(`${h}:${m}`);
  };
})()
```