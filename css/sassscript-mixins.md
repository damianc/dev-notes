# SassScript Mixins

## Horizontal (Top/Bottom) Properties Set at Once

```
@mixin h($prop, $val: false) {
	@if ($val == false) {
		@each $propName, $propVal in $prop {
			#{$propName}-top: $propVal;
			#{$propName}-bottom: $propVal;
		}
	} @else {
		#{$prop}-top: $val;
		#{$prop}-bottom: $val;
	}
}
```

* set `border-top`/`border-bottom` for `div.one`
* set `margin-top`/`margin-bottom`/`padding-top`/`padding-bottom` for `div.two`

```
@import 'mixins/h';

div.one {
	@include h(border, solid 4px #fa0);
}

div.two {
	@include h((
		margin: 10px,
		padding: 20px
	));
}
```

## Positioning an Element

```
@mixin pos($coords, $position: static) {
	@if $position != noPos and $position != noPosition {
		position: $position;
	}

	@if map-get($coords, t) != null {
		top: map-get($coords, t);
	}

	@if map-get($coords, b) != null {
		bottom: map-get($coords, b);
	}

	@if map-get($coords, l) != null {
		left: map-get($coords, l);
	}

	@if map-get($coords, r) != null {
		right: map-get($coords, r);
	}
}
```

* set position of `div.one` to _static_ (top: 20px, left: 50px)
* set position of `div.two` to _absolute_ (top: 30px, right: 30px)
* set `top` of `div.three` to 50px (without setting a position)

```
div.one {
	@include pos((t: 20px, l: 50px));
}

div.two {
	@include pos((t: 30px, r: 30px), absolute);
}

div.three {
	@include pos((t: 50px), noPos);
}
```

## Rounded Corners

```
@mixin br-format($h, $v, $r) {
	border-#{$h}-#{$v}-radius: #{$r};
	-moz-border-radius-#{$h}#{$v}: #{$r};
	-webkit-border-#{$h}-#{$v}-radius: #{$r};
}

@mixin border-radius($radius, $corners: tl tr bl br) {
	@each $corner in $corners {
		@if $corner == tl { @include br-format(top, left, $radius); }
		@if $corner == tr { @include br-format(top, right, $radius); }
		@if $corner == bl { @include br-format(bottom, left, $radius); }
		@if $corner == br { @include br-format(bottom, right, $radius); }
	}
}
```

* set top-left and bottom-right corners

```
div {
	@include border-radius(5px, tl br);
}
```