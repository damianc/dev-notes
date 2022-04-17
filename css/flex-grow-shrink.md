# `flex-grow` and `flex-shrink`

## `flex-grow`

* by default items are not enlarged to fill available space

![Default flex items](https://github.com/damianc/dev-notes/blob/master/_images/css/flex-grow-01.png "Default flex items")

* `flex-grow: 1` enlarges item by 1 slice of free space (cut into `n` slices, where `n` is sum of all values of `flex-grow` property of all items in a container)

![Flex items equally enlarged](https://github.com/damianc/dev-notes/blob/master/_images/css/flex-grow-02.png "Flex items equally enlarged")

* `flex-grow: 3` enlarges item by 3 slices of free space

![Flex items enlarged in a ratio of 1:3:1](https://github.com/damianc/dev-notes/blob/master/_images/css/flex-grow-03.png "Flex items enlarged in a ratio of 1:3:1")

## `flex-shrink`

* by default items are cut by 1 slice of extra space (cut into `n` slices, where `n` is sum of all values of `flex-shrink` property [being `1` if not defined] of all items in a container)

![Default cut flex items](https://github.com/damianc/dev-notes/blob/master/_images/css/flex-shrink-01.png "Default cut flex items")

![Flex items equally cut](https://github.com/damianc/dev-notes/blob/master/_images/css/flex-shrink-02.png "Flex items equally cut")

* `flex-shrink: 3` cuts item by 3 slices of extra space

![Flex items cut in a ratio of 1:3:1](https://github.com/damianc/dev-notes/blob/master/_images/css/flex-shrink-03.png "Flex items cut in a ratio of 1:3:1")