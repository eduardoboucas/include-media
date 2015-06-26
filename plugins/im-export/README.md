# include-media: Export breakpoints

> Export the state of your include-media breakpoints to JavaScript

## Introduction

**include-media** is a good solution for storing a list of breakpoints and using them to alter the behavior of a website using media queries. However, that list of breakpoints is restricted to the scope of the CSS stylesheets. That is fine most of the times, but it's not uncommon for developers to need access to that data on the JavaScript side. The concept is described [here](https://css-tricks.com/making-sass-talk-to-javascript-with-json/).

This plugin grabs all the breakpoints from **include-media** and outputs their status as JSON format on the `content` property of a DOM object (`<body>` by default), allowing developers to make decisions based on the viewport width without having to re-declare their breakpoints, leading to maintainability problems.

## Example

Let's say that you need to do calculations to create a grid layout, but doing them for mobile viewports is a waste because they will just go full width anyway.

### Without this plugin

```scss
$breakpoints: (small: 320px, medium: 768px, large: 1024px);

.nav {
  @include media('>=medium') {
    // Do the styling here
  }
}
```

```javascript
function doCalculations() {
  // Are we on a mobile view?
  if (window.outerWidth < 768) {
    return false;
  }
  
  // Do calculations here
}
```

This works fine, but we're declaring the `768px` breakpoint twice. Not DRY!

### With this plugin

```scss
$breakpoints: (small: 320px, medium: 768px, large: 1024px);

.nav {
  @include media('>=medium') {
    // Do the styling here
  }
}
```

```javascript
function doCalculations() {
  // Are we on a mobile view?
  if (!includeMedia.isActive('medium')) {
    return false;
  }
  
  // Do calculations here
}
```

We're grabbing the value of `medium` from **include-media**, so if we need to update it we'll just do it in the Sass.

## Installation

### Sass

```scss
@import '_include-media-export-breakpoints';
```

### JavaScript

Import `includeMedia.js` onto your project. This file is just a simplistic approach to access the information sent across by **include-media**. Feel free to extend it to fit your needs.
