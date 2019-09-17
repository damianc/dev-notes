# Built-in Observables

* `interval(periodMs)`
* `timer(delayMs, nextsPeriodMs?)`
* `of(item1, ..., itemN)`
* `range(start, count?)`
* `generate(initState, conditionFn?, iterationFn?, selectorFn?)`
* `from(iterableOrPromiseOrObservableLike)`
* `empty()` [_DEPRECATED_]
* `iif(condition, trueResult, falseResult?)`
* `defer(observableFactory)`
* `throwError(error)`
* `fromEvent(target, eventName, useCaptureOrOptions?, selectorFn?)`
* `fromEventPattern(addHandler, removeHandler?)`
* `bindCallback(callback, selectorFn?)`
* `bindNodeCallback(nodeStyleCallback, selectorFn?)`
* `ajax(urlOrOptionsObject)`
