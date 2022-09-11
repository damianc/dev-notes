# RxJS Custom Operator

Approaches:
- [direct call of a built-in operator](#Direct-call-of-a-Built-in-Operator)
- [`pipe()` function](#The-pipe-Function)
- function returning observable:
  - [`pipe`-d source observable](#A-Return-pipe-d-Source-Observable)
  - [new observable](#B-Return-Another-Observable)

## Direct call of a Built-in Operator

```
function  inRange(
  start:  number,
  end:  number
): MonoTypeOperatorFunction<number>  {
  return  filter((x:  number)  =>  {
    return  x  >=  start  &&  x  <=  end;
  });
}

// ----

const  stream$  =  of(1,2,3,4,5,6,7,8).pipe(
  inRange(2,6)
);

stream$.subscribe(console.log);
// 2 3 4 5 6
```

## The `pipe()` Function

```
// Op<number> gives:
// UnaryFunction<Observable<number>, Observable<number>>
type  Op<I,  O  =  I,  Obs  =  true>  =  UnaryFunction<
  Obs  extends  true  |  1  ?  Observable<I>  :  I,
  Obs  extends  true  |  2  ?  Observable<O>  :  O
>;

function  even(): Op<number>  {
  return  pipe(filter(
    (x: number)  =>  x % 2 ===  0
  ));
}

function  mulBy(x:  number): Op<number>  {
  return  pipe(map(
    (n: number) => n * x
  ));
}

// ----

const  stream$ = of(1,2,3,4,5,6,7,8).pipe(
  even(),
  mulBy(10)
);

stream$.subscribe(console.log);
// 20 40 60 80
```

### Multiple Built-ins

```
function  mulEvenBy(x:  number)  {
  return  pipe(
    filter((x:number)  =>  x  %  2  ===  0),
    map((n:  number)  =>  n  *  x)
  );
}

// ----

const  stream$  =  of(1,2,3,4,5,6,7,8).pipe(
  mulEvenBy(10)
);

stream$.subscribe(console.log);
// 20 40 60 80
```

### [hint]: `pipe()` Call Right in `pipe()` Calling

```
const  stream$  =  of(1,2,3,4,5,6,7,8).pipe(
  pipe(
    filter((x:  number)  =>  x  %  2  ===  0),
    map((x:  number)  =>  x  *  10)
  )
);

stream$.subscribe(console.log);
// 20 40 60 80
```

## Function Returning `Observable`

### [A]: Return `pipe`-d Source `Observable`

#### Example: `mulEvenBy(x)`

```
function  mulEvenBy(input:  number)  {
  return  function  (source:  Observable<number>)  {
    return  source.pipe(
      filter((x:  number)  =>  x  %  2  ===  0),
      map((x:  number)  =>  x  *  input)
    );
  }
}

// ----

const  stream$  =  of(1,2,3,4,5,6,7,8).pipe(
  mulEvenBy(10)
);

stream$.subscribe(console.log);
// 20 40 60 80
```

### [B]: Return Another `Observable`

#### Example 1: `sum()`

```
function  sum()  {
  return  function  (source:  Observable<number>)  {
    return  new  Observable(subscriber  =>  {
      let  _sum  =  0;
      
      const  subscription = source.subscribe({
        next(val) {
          _sum += val;
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.next(_sum);
          subscriber.complete();
        }
      });
      
      return  ()  =>  subscription.unsubscribe();
    });
  };
}

// ----

const  stream$  =  of(1,2,3,4,5,6,7,8).pipe(
  sum()
);

stream$.subscribe(console.log);
// 36
```

#### Example 2: `takeUntilX(x)`

```
function  takeUntilX(x:  number)  {
  return  function  (source:  Observable<number>)  {
    return  new  Observable(subscriber  =>  {
      const  subscription = source.subscribe({
        next(val) {
          subscriber.next(val);
          if (val === x) subscriber.complete();
        },
        error(err) {
          subscriber(err);
        },
        complete() {
          subscriber.complete();
        }
      });

      return  ()  =>  subscription.unsubscribe();
    });
  };
}

// ----

const  stream$  =  of(1,2,3,4,5,6,7,8).pipe(
  takeUntilX(4)
);

stream$.subscribe(console.log);
// 1 2 3 4
```