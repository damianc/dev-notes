# Custom Form Control

## Implementation

* `counter-input.component.ts`

```
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor, FormControl, ValidatorFn, NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'counter-input',
  templateUrl: './counter-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true
  }]
})
export class CounterInputComponent implements ControlValueAccessor {
  @Input()
  counterValue = 0;

  writeValue(value: any): void {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  propagateChange = (_: any) => {};
  // or: propagateChange!: Function;

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouch() {}

  increment() {
    this.counterValue++;
    this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.propagateChange(this.counterValue);
  }
}
```

* `counter-input.component.html`

```
<button type="button" (click)="increment()">+</button>
{{ counterValue }}
<button type="button" (click)="decrement()">-</button>
```

## Use

### Template-Driven Form

```
<form #form="ngForm" (ngSubmit)="submit(form.value)">
  <button type="button" (click)="setTo10()">
    Set to 10
  </button>

  <counter-input name="counter" [(ngModel)]="counterValue">
  </counter-input>

  <button type="submit">Submit</button>
</form>

{{ form.value | json }}
```

```
...
export class AppComponent {
  counterValue = 0;

  submit(formData: FormData) {
    console.log(formData);
  }

  setTo10() {
    this.counterValue = 10;
  }
}
```

### Reactive Form

```
<form [formGroup]="form" (ngSubmit)="submit()">
  <button type="button" (click)="setTo10()">
    Set to 10
  </button>

  <counter-input formControlName="counter">
  </counter-input>

  <button type="submit">Submit</button>
</form>

{{ form.value | json }}
```

```
...
export class AppComponent {
  form = new FormGroup({
    counter: new FormControl(0)
  });

  submit() {
    console.log(this.form.value);
  }

  setTo10() {
    this.form.get('counter').setValue(10);
  }
}
```

## Update: Getter and Setter

```
export class CounterInputComponent implements ControlValueAccessor {
  @Input()
  _counterValue = 0; // ADDED
  // REMOVED: counterValue = 0;

  // ADDED
  get counterValue() {
    return this._counterValue;
  }

  // ADDED
  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  ...

  increment() {
    this.counterValue++;
    // REMOVED: this.propagateChange(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    // REMOVED: this.propagateChange(this.counterValue);
  }
}
```

## Validator

```
export const validateCounterRange = ((c: FormControl) => {
  let err = {
    rangeError: {
      given: c.value,
      max: 10,
      min: 0
    }
  };

  return (c.value > 10 || c.value < 0) ? err : null;
}) as ValidatorFn;

@Component({
  ...
  providers: [
    ...
    {
      provide: NG_VALIDATORS,
      // there is also NG_ASYNC_VALIDATORS
      useValue: validateCounterRange,
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {
  ...
}
```

### Use

```
form = new FormGroup({
  counter: new FormControl(0),
  otherNumberControl: new FormControl(4, validateCounterRange)
});
```

```
[+] 12 [-]    [20]    [Submit]
```

```
this.form.get('counter')?.errors
// { rangeError: { given: 12, max: 10, min: 0 } }

this.form.get('otherNumberControl')?.errors
// { rangeError: { given: 20, max: 10, min: 0 } }
```

### Unplug and Keep Optional

```
// REMOVED
{
  provide: NG_VALIDATORS,
  useValue: validateCounterRange,
  multi: true
}
```

```
form = new FormGroup({
  counter: new FormControl(
    0,
    validateCounterRange // ADDED
  )
});
```

### Configurable Validation

* validator

```
export const validateCounterRange = (min: string | number, max: string | number) => {
  return ((c: FormControl) => {
    if (typeof min === 'string') min = parseInt(min);
    if (typeof max === 'string') max = parseInt(max);

    if (c.value > max || c.value < min) {
      return {
        rangeError: {
          given: c.value,
          min,
          max
        }
      };
    } else return null;
  }) as ValidatorFn;
};
```

* custom control

```
@Component({
  selector: 'counter-input',
  templateUrl: './counter-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CounterInputComponent),
    multi: true
  }]
})
export class CounterInputComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input()
  _counterValue = 0;

  @Input()
  counterRangeMin: number | string = 0;

  @Input()
  counterRangeMax: number | string = 10;

  validateFn!: Function;

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  writeValue(value: any): void {
    if (value !=== undefined) {
      this.counterValue = value;
    }
  }

  propagateChange = (_: any) => {};
  // or: propagateChange!: Function;

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  ngOnInit(): void {
    this.updateValidator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['counterRangeMin'] ||
      changes['counterRangeMax']
    ) {
      this.updateValidator();
    }
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }

  private updateValidator(): void {
    this.validateFn = validateCounterRange(
      this.counterRangeMin,
      this.counterRangeMax
    );
  }
}
```

```
<button type="button" (click)="increment()">+</button>
{{ counterValue }}
<button type="button" (click)="decrement()">-</button>
```

#### Use

```
<counter-input
  formControlName="counter"
  counterRangeMin="0"
  counterRangeMax="10"
></counter-input>
```

```
form = new FormGroup({
  counter: new FormControl(0),
  cx: new FormControl(4, validateCounterRange(5, 20))
});
```