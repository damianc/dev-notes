# The `*ngIf` Directive

## The `else` Block

```
<div *ngIf="condition; else elseBlock">that's true</div>
<ng-template #elseBlock>that's else</ng-template>
```

## The `if then...else` Struct

```
<div *ngIf="condition; then thenBlock else elseBlock"></div>
<ng-template #thenBlock>that's true</ng-template>
<ng-template #elseBlock>that's false</ng-template>
```

## Storing a value locally

```
<div *ngIf="condition as value">{{ value }}</div>
```

```
<div *ngIf="condition as value; else elseBlock">that's {{ value }}</div>
<ng-template #elseBlock>that's false</ng-template>
```

```
<div *ngIf="condition as value; then thenBlock else elseBlock"></div>
<ng-template #thenBlock let-val>that's {{ val }}</ng-template>
<ng-template #elseBlock>that's false</ng-template>
```

### Piped, Async etc. Included

```
<div *ngIf="userObservable | async as user; else loading">
	Hello {{ user.first }} {{ user.last }}!
</div>
<ng-template #loading let-user>Waiting... (user is {{ user|json }})</ng-template>
```