# Angular Methods

| Function | $f(x)$ | $f'(x)$ | $f^{-1}(x)$ |
|--|--|--|--|
| sine | $\sin(x)$ | $\cos(x)$ | $\arcsin(x)$ |
| cosine | $\cos(x)$ | $-\sin(x)$ | $\arccos(x)$ |
| tangent | $\tan(x)$ | $\sec^2(x) = \frac{1}{\cos^2(x)}$ | $\arctan(x)$ |
| cosecant | $\csc(x) = \frac{1}{\sin(x)}$ | $-\csc(x)\cot(x)$ | $\arcsin\left(\frac{1}{x}\right)$ |
| secant | $\sec(x) = \frac{1}{\cos(x)}$ | $\sec(x)\tan(x)$ | $\arccos\left(\frac{1}{x}\right)$ |
| cotangent | $\cot(x) = \frac{1}{\tan(x)}$ | $-\csc^2(x)$ | $\arctan\left(\frac{1}{x}\right)$ |
| exsec[ant] (_external secant_) | $\text{exs}(x) = \frac{1}{\cos(x)}-1$ | $\tan(x)\sec(x) = \frac{\sin(x)}{\cos^2(x)}$ | $\text{arcsec}(x+1) = \arccos\left(\frac{1}{x+1}\right) = \arctan(\sqrt{x^2+2x})$ | 
| excosec[ant]/coexsec[ant] (_external cosecant_) | $\text{exc} = \frac{1}{\sin(x)}-1$ | $-\cot(x)\csc(x) = \frac{-\cos(x)}{\sin^2(x)}$ | $\text{arccsc}(x+1) = \arcsin\left(\frac{1}{x+1}\right)$ |
| versin (_versed sine_) | $\text{ver}(x) = 2\sin^2\left(\frac{x}{2}\right) = 1-\cos(x)$ | $\sin(x)$ | $\arccos(1-x)$ |
| coversin (_coversed sine_) | $\text{cvs}(x) = 1-\sin(x)$ | $-\cos(x)$ | $\arcsin(1-x)$ |
| vercos (_versed cosine_) | $\text{vcs}(x) = 2\cos^2\left(\frac{x}{2}\right) = 1+\cos(x)$ | $-\sin(x)$ | $\arccos(x-1)$ |
| covercos (_coversed cosine_) | $\text{cvc}(x) = 1+\sin(x)$ | $\cos(x)$ | $\arcsin(x-1)$ |
| haversin (_half-versed sine_) | $\text{hav}(x) = \sin^2\left(\frac{x}{2}\right) = \frac{1-\cos(x)}{2}$ | $\frac{\sin(x)}{2}$ | $2\arcsin(\sqrt{x}) = \arccos(1-2x)$ |
| hacoversin (_half-coversed sine_) | $\text{hcv}(x) = \frac{1-\sin(x)}{2}$ | $\frac{-\cos(x)}{2}$ | $\arcsin(1-2x)$ |
| havercos (_half-versed cosine_) | $\text{hvc}(x) = \cos^2\left(\frac{x}{2}\right) = \frac{1+\cos(x)}{2}$ | $\frac{-\sin(x)}{2}$ | $2\arccos(\sqrt{x}) = \arccos(2x-1)$ |
| hacovercos (_half-coversed cosine_) | $\text{hcc}(x) = \frac{1+\sin(x)}{2}$ | $\frac{\cos(x)}{2}$ | $\arcsin(2x-1)$ |
