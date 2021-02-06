# Conditional Validators

```
<input
  type="checkbox"
  formControlName="isOtherCurrency" 
  #otherCurrency
  (change)="otherCurrencyCheckChanged(otherCurrency.checked)"
/> Other currency than USD

<span>Currency:</span>
<input
  type="text"
  formControlName="currency"
/>
```

```
public otherCurrencyCheckChanged(isChecked: boolean): void {
  const currencyControl = this.form.controls.currency;

  if (isChecked) {
    currencyControl.setValidators([Validators.required]);
  } else {
    currencyControl.clearValidators();
  }

  currencyControl.updateValueAndValidity();
}
```

> If we only pass 1 validator, it does not have to be given as an array: `currencyControl.setValidators(Validators.required)`.