# Polygon Area

For polygons in which sibling points match $(x_n-x_{n+1})(y_n - y_{n+1}) = 0$.

## Implementation

```
function polygonArea(points) {
  const NUM_SORT_ASC = (a,b) => a - b;
  const [xs,ys] = collectXsAndYs();
  const xWalls = collectWallsByX();
  const [xWidths,yHeights] = constructGrid();
  return calcArea();

  function collectXsAndYs() {
    const [dirtyXs, dirtyYs] = points.reduce(([accXs,accYs],[currX,currY]) => [
      [...accXs, currX],
      [...accYs, currY]
    ], [[], []]);
    const xs = [...new Set(dirtyXs)];
    const ys = [...new Set(dirtyYs)];
    xs.sort(NUM_SORT_ASC);
    ys.sort(NUM_SORT_ASC);
    return [xs,ys];
  }

  function collectWallsByX() {
    const xWalls = {};
    for (let x of xs) {
      const pointsInX = points.filter(([px]) => px === x);
      const pointsYs = pointsInX.map(([,py]) => py);
      pointsYs.sort(NUM_SORT_ASC);

      const xRanges = [];
      for (let i = 0; i < pointsYs.length; i += 2) {
        xRanges.push([
          pointsYs[i], pointsYs[i+1]
        ]);
      }
      xWalls[x] = xRanges;
    }
    return xWalls;
  }

  function isInnerTile(tileX, tileY) {
    let walls = 0;
    const tileHeight = yHeights[tileY];
    for (let xr in xWalls) {
      if (xr > tileX) break;
      const wallsInX = xWalls[xr];
      const wall = wallsInX.find(([b,e]) => b <= tileY && e >= tileY + tileHeight);
      if (typeof wall !== 'undefined') walls += 1;
    }
    return walls % 2 !== 0;
  }

  function constructGrid() {
    const DIST_REDUCER = (acc, curr, idx, arr) => {
      if (idx === arr.length - 1) return acc;
      return {
        ...acc,
        [curr]: arr[idx+1] - curr
      };
    };
    const tileWidths = xs.reduce(DIST_REDUCER, {});
    const tileHeights = ys.reduce(DIST_REDUCER, {});
    return [tileWidths, tileHeights];
  }

  function getTileArea(tileX, tileY) {
    const tileWidth = xWidths[tileX];
    const tileHeight = yHeights[tileY];
    return tileWidth * tileHeight;
  }

  function calcArea() {
    let area = 0;
    for (let tileX of xs.slice(0,-1)) {
      for (let tileY of ys.slice(0,-1)) {
        if (isInnerTile(tileX, tileY)) {
          area += getTileArea(tileX, tileY);
        }
      }
    }
    return area;
  }
}
```

### Use

```
polygonArea([
  [20,20], [100,20],
  [100,100], [20,100]
]);
// 6400

polygonArea([
  [20,20], [80,20],
  [80,40], [100,40],
  [100,100], [20,100]
]);
// 6000
```