<a href="http://include-media.com">!['At' sign](http://include-media.com/assets/images/logo.png)</a>

[include-media.com](http://include-media.com)


## Installation
- **Manually:** Download the [*include-media* SCSS file](https://raw.githubusercontent.com/eduardoboucas/include-media/master/dist/_include-media.scss) and `@import` it into your project.
- **Using Bower:** Run `bower install include-media` and import `dist/_include-media.scss` into your project.

## Configuration
The mixin comes ready to use, but you can tweak a few things if you want.

#### Breakpoints
It comes with a couple of default breakpoints by default:

| Breakpoint name | Width  |
|-----------------|--------|
| phone           | 320px  |
| tablet          | 768px  |
| desktop         | 1024px |

You can override this list by re-declaring the variable `$breakpoints` anywhere in your code as a multidimensional list, following this syntax:

``` sass
$breakpoints: (phone: 320px, tablet: 768px, desktop: 1024px);
```

#### Media expressions
**import-media** comes with a list of media expressions that include media types and expressions that do not depend on the breakpoints.

| Name     | Value                                                              | Description                                                                            |
|----------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| screen   | "screen"                                                           | screen media type                                                                      |
| print    | "print"                                                            | print media type                                                                       |
| handheld | "handheld"                                                         | handheld media type                                                                    |
| retina2x | "(-webkit-min-device-pixel-ratio: 2)",  "(min-resolution: 192dpi)" | Targets devices with a minimum pixel ratio of 2 (retina 2x). e.g. iPhone 4 to iPhone 6 |
| retina3x | "(-webkit-min-device-pixel-ratio: 3)",  "(min-resolution: 350dpi)" | Targets devices with a minimum pixel ratio of 3 (retina 3x)                            |

You can override this list by re-declaring the variable `$media-expressions` anywhere in your code as a multidimensional list. Expression with logical disjunctions (`or` operator) are declared as a nested list of strings. The syntax is the following:

``` sass
$media-expressions: (screen: "screen", 
                    print: "print", 
                    handheld: "handheld",
                    retina2x: ("(-webkit-min-device-pixel-ratio: 2)", "(min-resolution: 192dpi)"), 
                    retina3x: ("(-webkit-min-device-pixel-ratio: 3)", "(min-resolution: 350dpi)")
                    ) !default;
```

## Examples

#### Using one or two breakpoints as conditions

``` sass
@include media(">=phone") {
	// Your rules here
}

// Compiles to:

@media (min-width: 320px) {
	// Your rules here
}
```

``` sass
@include media(">=tablet", "<desktop") {
	// Your rules here
}

// Compiles to:

@media (min-width: 768px) and (max-width: 1023px) {
	// Your rules here
}
```

#### Using a breakpoint and a custom value as conditions

``` sass
@include media(">=desktop", "<1280px") {
	// Your rules here
}

// Compiles to:

@media (min-width: 1024px) and (max-width: 1279px) {
	// Your rules here
}
```

#### Using media types and static expressions
``` sass
@include media("screen", ">tablet") {
	// Your rules here
}

// Compiles to:

@media screen and (min-width: 769px) {
	// Your rules here
}
```

``` sass
@include media("retina2x", ">=tablet") {
	// Your rules here
}

// Compiles to:

@media (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px),
	   (min-resolution: 192dpi) and (min-width: 768px) {
	// Your rules here
}
```

## Want to contribute?
Feel free to submit issues/pull requests. Ping me on [Twitter](https://twitter.com/eduardoboucas) if you have any questions.
