# Multiple `<ng-content>`

* component with multiple slots

```
@Component({
  selector: '[leftRight]',
  template: `
    <div>
      <ng-content select="[left]"></ng-content>
    </div>
    <div>
      <ng-content select="[right]"></ng-content>
    </div>
  `
})
export class LeftRightComponent {}
```

* component use

```
<div leftRight>
  <div left>
    Leftie
  </div>
  <div right>
    Rightie
  </div>
</div>
```

### The `select` value

* element - e.g., `h1`
* component - e.g., `slotComponent` 
* class name - e.g., `.slot-class`
* identifier - e.g., `#slot-id`
* attribute - e.g., `[slotAttr]`
* attribute with value - e.g., `[slotAttr="val"]`
* compound selectors - e.g., `article[attr].class`
* multiple selectors - e.g., `h1, [slotAttr]`
* negated selectors - e.g., `article:not(.nonslot)`

## Default Slot

```
@Component({
  selector: '[leftRight]',
  template: `
    <div>
      <ng-content select="[left]"></ng-content>
    </div>
    <div>
      <ng-content></ng-content>
    </div>
    <div>
      <ng-content select="[right]"></ng-content>
    </div>
  `
})
export class LeftRightComponent {}
```

```
<div leftRight>
  <div left>Leftie</div>
  <div>Centah</div>
  <div right>Rightie</div>
</div>
```

## Collecting Content for Slots

* markup like:

```
<div leftRight>

  main start

  <div left>
    Leftie
  </div>

  <div>
    Centah
  </div>

  <div right>
    Rightie
  </div>

  main end

  <div left>Leftie 2</div>

</div>
```

* gives output like:

```
Leftie
Leftie 2
main start
Centah
main end
Rightie
```