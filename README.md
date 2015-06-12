<a href="http://include-media.com">!['At' sign](http://include-media.com/assets/images/logo.png)</a>

# include-media
> Simple, elegant and maintainable media queries in Sass

## What?
**include-media** is a Sass library for writing CSS media queries in an easy and maintainable way, using a natural and simplistic syntax.

## Why?
I spent quite some time experimenting with different libraries and mixins available out there, but eventually all of them failed to do everything I needed in an elegant way. Some of them wouldn't let me mix set breakpoints with case-specific values, others wouldn't properly handle the CSS OR operator and most of them had a syntax that I found complicated and unnatural.

**include-media** was the result of that experience and it includes all the features I wish I had found before, whilst maintaining a simplistic and natural syntax.

## How to install

- With Bower: `bower install include-media`
- Manually: get [this file](https://raw.githubusercontent.com/eduardoboucas/include-media/master/dist/_include-media.scss)

## How to use (examples)

### Flexible declaration of breakpoints

```scss
$breakpoints: (phone: 320px, tablet: 768px, desktop: 1024px);

/* Inclusive and exclusive operators for a finer control over the intervals */
@include media(">phone", "<=tablet") {
  width: 50%;
}

/* Use ligatured operators if you fancy a slicker declaration */
@include media("≥phone", "≤tablet") {
  line-height: 1.5;
}

/* Redefining breakpoints map with a different naming convention */
$breakpoints: (small: 320px, medium: 768px, large: 1024px);

@include media('>=medium') {
  color: tomato;
}
```

### On-the-fly breakpoints

```scss
@include media(">desktop", "<=1150px") {
  font-size: 4.0rem;
}
```

### Smart support for media types

```scss
@include media("retina2x", ">desktop") {
  width: 100%;
}
```

### Support for different units

```scss
$breakpoints: (phone: 20em, tablet: 48em, desktop: 64em);

@include media(">tablet", "<=52em") {
  background-color: #bad;
}
```

### Expression aliases

```scss
$my-weird-bp: ">=tablet", "<815px", "landscape", "retina3x";

@include media($my-weird-bp...) {
  display: inline-block;
}
```

### Height-based media queries

```scss
$breakpoints: (small: 320px, medium: 768px, large: 1024px);

@include media("height>small", "height<=medium") {
  height: 50%;
}
```

### Context-specific breakpoints and expressions

```scss
@include media-context(('custom': 678px)) {
  .my-component {
    @include media(">phone", "<=custom") {
      border-radius: 100%;
    }
  }
}
```

## Learn more
- [include-media.com](http://include-media.com)
- [include-media: Release the docs!](http://include-media.com/documentation/)
- [Approaches to Media Queries in Sass](https://css-tricks.com/approaches-media-queries-sass/) (CSS-Tricks)
- [Write Simple, Elegant and Maintainable Media Queries with Sass](http://davidwalsh.name/sass-media-query) (David Walsh blog)
- [Create Simple Inline Media Queries with include-media](http://webdevstudios.com/2015/05/18/create-simple-inline-media-queries-include-media/) (WebDevStudios)
- [Breakpoints and Tweakpoints in Sass](http://www.sitepoint.com/breakpoints-tweakpoints-sass/) (SitePoint)

## The authors
We are [Eduardo Bouças](https://twitter.com/eduardoboucas) and [Hugo Giraudel](https://twitter.com/hugogiraudel).

## We want to hear from you
We'll be on the lookout for your [issues](https://github.com/eduardoboucas/include-media/issues) and [pull requests](https://github.com/eduardoboucas/include-media/pulls) — but make sure you read [this](https://github.com/eduardoboucas/include-media/blob/master/CONTRIBUTING.md) before submitting any code!

Made with ♥
