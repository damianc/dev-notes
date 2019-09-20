# Service Provider

These two codes equal:

```
@NgModule({
	...
	providers: [
		...
		SomeService
	]
})
export class AppModule {}
```

```
@NgModule({
	...
	providers: [
		...
		{provide: SomeService, useClass: SomeService}
	]
})
export class AppModule {}
```

# Value Provider

```
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReadService, ReaderFormat } from './read.service';
...

let reader = new ReadService();
reader.format = ReaderFormat.PDF;

@NgModule({
	...
	providers: [
		...
		{provide: LOCALE_ID, useValue: 'pl-PL'},
		{provide: ReadService, useValue: reader}
	]
})
export class AppModule {}
```

# Factory Provider

```
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReadService, ReaderFormat, READER_FORMAT } from './read.service';
...

@NgModule({
	...
	providers: [
		...
		{provide: READER_FORMAT, useValue: ReaderFormat.PDF},
		{
			provide: ReadService,
			deps: [READER_FORMAT],
			useFactory: (format) => {
				let reader = new ReadService();
				reader.format = format;
				return reader;
			}
		}
	]
})
export class AppModule {}
```

# Alias Provider

```
@NgModule({
	{provide: READER_FORMAT, useValue: ReaderFormat.PDF},
	{provide: 'readerFormat', useExisting: READER_FORMAT},
	{
		provide: ReadService,
		deps: ['readerFormat'],
		useFactory: (format) => {
			let reader = new ReadService();
			reader.format = format;
			return reader;
		}
	}
})
```

# Providers Overview

## Properties of Providers

| Property               | Description                                     |
|------------------------|-------------------------------------------------|
| `provide`              | A token indicating the service.                 |
| `multi`                | Used if an array of services is passed.         |
| `useClass`             | A class of the service.                         |
| `useValue`             | A value of the service (primitive or object).   |
| `useFactory`           | A factory function of the service.              |
| `deps`                 | Dependencies for the factory function.          |
| `useExisting`          | An existing service for the alias.              |

## Text Token

```
providers: [
	...
	{provide: 'reader', useClass: ReadService}
]
```

```
import { Injectable, Inject } from '@angular/core';
import { ReadService } from './read.service';

@Injectable()
export class AnotherService {
	constructor(
		@Inject('reader') private reader: ReadService
	) {}

	...
}
```

## `InjectionToken`

```
import { Injectable, InjectionToken } from '@angular/core';
export const READ_SERVICE = new InjectionToken('reader');

@Injectable()
export class ReadService {
	...
}
```

```
import { NgModule } from '@angular/core';
import { ReadService, READ_SERVICE } from './read.service';

@NgModule({
	...
	providers: [
		{provide: READ_SERVICE, useClass: ReadService}
	]
})
```

```
import { Directive, Inject } from '@angular/core';
import { ReadService, READ_SERVICE } from './read.service';

@Directive({
	...
})
export class SomeDirective {
	constructor(
		@Inject(READ_SERVICE) private reader: ReadService
	) {}

	...
}
```

## Providing an Array of Services

```
export const READ_SERVICE = new InjectionToken('reader');

@Injectable()
export class ReadService { ... }

@Injectable()
export class PDFReadService extends ReadService { ... }

@Injectable()
export class XMLReadService extends ReadService { ... }
```

```
import { NgModule } from '@angular/core';
import { ReadService, PDFReadService, XMLReadService, READ_SERVICE } from './read.service';

@NgModule({
	...
	providers: [
		{provide: READ_SERVICE, useClass: ReadService, multi: true},
		{provide: READ_SERVICE, useClass: PDFReadService, multi: true},
		{provide: READ_SERVICE, useClass: XMLReadService, multi: true}
	]
})
export class AppModule {}
```

```
import { Injectable, Inject } from '@angular/core';
import { READ_SERVICE, ReadService, ReaderFormat } from './read.service';

@Injectable()
export class AnotherService {
	private reader: ReadService;

	constructor(
		@Inject(READ_SERVICE) readers: ReadService[]
	) {
		this.reader = readers.find(r => r.format == ReaderFormat.PDF);
		...
	}
}
```
