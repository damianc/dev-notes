# Angular Diameter/Size

$$
\theta = 2 \cdot \arctan\left( \frac{0.5 \cdot d}{r} \right) = 2 \cdot \arctan\left( \frac{d}{2r} \right)
$$

## Getting Distance

$$
r = \frac{0.5 \cdot d}{\tan\left( \frac{\theta}{2} \right)} = \frac{d}{2 \cdot \tan\left( \frac{\theta}{2} \right)}
$$

## Getting Diameter

$$
d = 2r \cdot \tan\left( \frac{\theta}{2} \right)
$$

![Angular Size](https://github.com/damianc/dev-notes/blob/master/_images/math/angular-size.png "Angular Size")

## Examples

### Getting Angular Size

$$
r=25
$$

$$
d=12
$$

$$
\implies
$$

$$
\theta = 2 \cdot \arctan\left( \frac{0.5 \cdot d}{r} \right) = 2 \cdot \arctan\left( \frac{0.5 \cdot 12}{25} \right)
$$

$$
\theta = 2 \cdot \arctan\left( \frac{6}{25} \right) = 2 \cdot \arctan( 0.24)
$$

$$
\theta = 2 \cdot 0.235545 = 0.47109
$$

### Getting Distance

$$
\theta = 0.47109
$$

$$
d = 12
$$

$$
\implies
$$

$$
r = \frac{0.5 \cdot d}{\tan\left( \frac{\theta}{2} \right)} = \frac{0.5 \cdot 12}{\tan\left( \frac{0.47109}{2} \right)}
$$

$$
r = \frac{6}{\tan(0.235545)} = \frac{6}{0.24} = 25
$$

### Getting Diameter

$$
\theta = 0.47109
$$

$$
r = 25
$$

$$
\implies
$$

$$
d = 2r \cdot \tan\left( \frac{\theta}{2} \right) = 2 \cdot 25 \cdot \tan\left( \frac{0.47109}{2} \right)
$$

$$
d = 50 \cdot \tan(0.235545) = 50 \cdot 0.24 = 12
$$