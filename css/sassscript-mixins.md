# SassScript Mixins

* [Set Width/Height at Once](#set-widthheight-at-once)
* [Horizontal (Top/Bottom) Properties Set at Once](#horizontal-topbottom-properties-set-at-once)
* [Positioning an Element](#positioning-an-element)
* [Rounded Corners](#rounded-corners)
* [Prefixed Properties](#prefixed-properties)
* [Isolate a Layer by Margin and Padding](#isolate-a-layer-by-margin-and-padding)

## Set Width/Height at Once

```
@mixin size($w, $h: false) {
	@if $h == false {
		$width: $w;
		$height: $w;
	} @else {
		$width: $w;
		$height: $h;
	}

	width: $width;
	height: $height;
}
```

* set size of `div.one` to 500x200 px
* set size of `div.two` to 120x120 px

```
div {
	&.one {
		@include size(500px, 200px);
	}
	&.two {
		@include size(120px);
	}
}
```

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

## Prefixed Properties

```
@mixin prefixy($rule, $value, $prefixable: 'rule', $prefixes: webkit ms moz o) {
	@each $prefix in $prefixes {
		$ruleStmt: if($prefixable == 'both' or $prefixable == 'rule', -#{$prefix}-#{$rule}, $rule);
		$valueStmt: if($prefixable == 'both' or $prefixable == 'value', -#{$prefix}-#{$value}, $value);

		#{$ruleStmt}: #{$valueStmt};
	}

	#{$rule}: #{$value};
}
```

* set prefixed `box-shadow` for `div.one`
* set prefixed `text-shadow` for `div.two`

```
div.one {
	@include prefixy(box-shadow, (0 2px 4px 0 rgba(255, 255, 255, .30)));
}

div.two {
	@include prefixy(text-shadow, 0 1px 1px rgba(0, 0, 0, .5));
	color: #fff;
}
```

## Isolate a Layer by Margin and Padding

```
@mixin isolate($lengths, $sides: 'all') {
	$marginVal: if(length($lengths) == 1, $lengths, nth($lengths, 1));
	$paddingVal: if(length($lengths) == 1, $lengths, nth($lengths, 2));
	$shortcuts: (
		t: top,
		b: bottom,
		l: left,
		r: right
	);

	@if $sides == 'all' {
		margin: $marginVal;
		padding: $paddingVal;
	} @else {
		@each $side in $sides {
			$s: map-get($shortcuts, $side);
			@if s != null {
				margin-#{$s}: #{$marginVal};
				padding-#{$s}: #{$paddingVal};
			}
		}
	}
}
```

* set all margins and padding of `div.one` to 25px
* set left/right margins and padding of `div.two` to 15px
* set top margin of `div.three` to 25px and top padding to 15px

```
div.one {
	@include isolate(25px);
}

div.two {
	@include isolate(15px, l r);
}

div.three {
	@include isolate(25px 15px, t);
}
```