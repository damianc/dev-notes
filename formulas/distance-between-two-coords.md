# Distance Between 2 Coords

* [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula)
* [UTM Coordinate System](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)

$lat_{\Delta} = lat_2 - lat_1$  
$lon_{\Delta} = lon_2 - lon_1$  
  
$a = \sin(\frac{lat_{\Delta}}{2})^2 +  \cos(lat_1) \cdot \cos(lat_2) \cdot \sin(\frac{lon_{\Delta}}{2})^2$  
  
$c = 2 \cdot \text{atan}^2(\sqrt{a}, \sqrt{1- a})$  
  
$\bold{d = 6371 \cdot c}$

```
function getDistance(lat1, lon1, lat2, lon2) {
  const rad = n => n * Math.PI / 180;
  const R = 6371; // radius of Earth (KM)

  const latDelta = rad(lat2) - rad(lat1);
  const lonDelta = rad(lon2) - rad(lon1);

  const a =
    Math.sin(latDelta / 2) ** 2 +
    Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
    Math.sin(lonDelta / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return +d.toFixed(2); // KM
}
```

```
const tokyo = [35.6895, 139.69171];
const sydney = [-33.86785, 151.20732];

getDistance(...tokyo, ...sydney);
// 7826.48
// (7821 KM by Google)


const warsaw = [52.22977, 21.01178];
const poznan = [52.40692, 16.92993];

getDistance(...warsaw, ...poznan);
// 278.11
// (278.34 KM by Google Maps)
```

> Coordinates from:
> [https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table](https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/table/?disjunctive.cou_name_en&sort=name)