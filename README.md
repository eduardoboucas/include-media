# include-media
A SASS mixin for writing media queries with a clean and natural syntax and with total control of the conditions. 

**Direct download:** [Latest version](https://raw.githubusercontent.com/eduardoboucas/include-media/master/dist/_include-media.scss)

## Installation
Download the *include-media* SCSS file and `@import` it into your project. Then there's a few things you can tweak

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

## Usage

#### Using one or two breakpoints as conditions

``` sass
@include media(">=tablet", "<desktop") {
	// Your rules here
}
```

compiles to

``` css
@media (min-width: 768px) and (max-width: 1023px) {
	// Your rules here
}
```