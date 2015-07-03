<a href="http://include-media.com">!['At' sign](http://include-media.com/assets/images/logo.png)</a>

# include-media

> Export breakpoints plugin

### Introduction

**include-media** is a good solution for storing a list of breakpoints and using them to alter the behavior of a website using media queries. However, that list of breakpoints is restricted to the scope of the CSS stylesheets. That is fine most of the times, but it's not uncommon for developers to need access to that data on the JavaScript side. The concept is described [here](https://css-tricks.com/making-sass-talk-to-javascript-with-json/).

This plugin grabs all the breakpoints from **include-media** and outputs their status as JSON format on the `content` property of a DOM object (`<body>` by default), allowing developers to make decisions based on the viewport width without having to re-declare their breakpoints, leading to maintainability problems.

More information about this plugin can be found [here](https://eduardoboucas.com/blog/2016/06/29/using-breakpoints-in-javascript-with-include-media.html).

## Installation

### Sass

Download [this file](#) and include it in your Sass project

```scss
@import 'include-media-export';
```

### JavaScript

Import `includeMedia.js` onto your project. This file is just a simplistic approach to access the information sent across by include-media. Feel free to extend it to fit your needs.

## API

###`im.greaterThan(breakpoint)`
Determines whether the current viewport width is greater than or equal to a set breakpoint

- **Accepts:**
  - `breakpoint` - Name of the breakpoint to test against
- **Returns:** `Boolean`
- **Example:**
```javascript
if (im.greaterThan('desktop')) {
    console.log('This is a really big screen');
}
```
---
###`im.lessThan(breakpoint)`
Determines whether the current viewport is less than a set breakpoint

- **Accepts:**
  - `breakpoint` - Name of the breakpoint to test against
- **Returns:** `Boolean`
- **Example:**
```javascript
if (im.lessThan('tablet')) {
    console.log('This looks like a phone or a small tablet');
}
```
---
###`im.getActive()`
Returns the name of the largest breakpoint active

- **Accepts:** N/A
- **Returns:** `String`
- **Example:**
```javascript
if (im.getActive() == 'phone') {
    console.log('This looks like a phone');
}
```
---
###`im.getValue(breakpoint, asNumber)`
Returns a breakpoint's value

- **Accepts:**
  - `breakpoint` - Name of the breakpoint
  - `asNumber` (optional) - Return the value as a `String` (with units) or as a number (unitless) 
- **Returns:** `String` or `Float`
- **Example:**
```javascript
console.log('For me, a desktop has a width of ' + im.getValue('desktop'));
```
---
###`im.setElement(element)`
Defines the element where the JSON data is contained (default is `body::after`)

- **Accepts:**
  - `element` - DOM element
- **Returns:** N/A
- **Example:**
```javascript
im.setElement(document.getElementById('my-element'));
```
---
###`im.setUpdateMode(mode)`
Defines how the library polls the DOM element for updates. By default, it happens automatically when any query function is executed. The user can decide to take control of when the updates actually happen, by setting the update mode to `'manual'` and calling `im.update()` to update.

Note that when this function is called for the first time it automatically runs an update.

- **Accepts:**
  - `mode` - Update mode. `auto` (default) or `manual`
- **Returns:** N/A
- **Example:**
```javascript
im.setUpdateMode('manual');
```
---
###`im.update()`
Updates the information about the state of the breakpoints by querying the DOM and parsing the JSON object. You **don't** need to use this function unless you set the update mode to `manual` (see above).

- **Accepts:** N/A
- **Returns:** N/A
- **Example:**
```javascript
window.addEventListener('resize', im.update);
```
