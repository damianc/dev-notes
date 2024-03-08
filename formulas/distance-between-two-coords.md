# Distance Between 2 Coords

* [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula)
* [UTM Coordinate System](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)

```
function getDistance(A, B) {
  const rad = n => n * Math.PI / 180;
  const [lat1,lon1] = A.map(rad);
  const [lat2,lon2] = B.map(rad);
  
  const sin2 = x => Math.sin(x)**2;
  const R = 6371; // radius of Earth (KM)

  const latDelta = lat2 - lat1;
  const lonDelta = lon2 - lon1;

  const n = Math.cos(lat1) * Math.cos(lat2);
  const a =
    sin2(latDelta / 2) +
    sin2(lonDelta / 2) * n;

  const c = 2 * Math.atan2(
    Math.sqrt(a),
    Math.sqrt(1 - a)
  );
  const d = R * c;

  return +d.toFixed(2); // KM
}
```

$lat_{\Delta} = lat_2 - lat_1$  
$lon_{\Delta} = lon_2 - lon_1$  
  
$a = \sin^2\left(\frac{lat_{\Delta}}{2}\right) + \sin^2\left(\frac{lon_{\Delta}}{2}\right) \cdot  \cos(lat_1) \cdot \cos(lat_2)$  
  
$c = 2 \cdot \text{atan2}(\sqrt{a}, \sqrt{1- a})$  
  
> $d = 6371 \cdot c$

```
const tokyo = [35.6895, 139.69171];
const sydney = [-33.86785, 151.20732];

console.log(
  getDistance(tokyo, sydney)
);
// 7826.48
// (7821 KM by Google)


const warsaw = [52.22977, 21.01178];
const poznan = [52.40692, 16.92993];

console.log(
  getDistance(warsaw, poznan)
);
// 278.11
// (278.34 KM by Google Maps)
```

> Coordinates from:
> [https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table](https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.cou_name_en&sort=name)
