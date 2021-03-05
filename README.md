<a href="https://eduardoboucas.github.io/include-media/">!['At' sign](https://eduardoboucas.github.io/include-media/assets/images/logo.png)</a>

# include-media [![Build Status](https://travis-ci.org/eduardoboucas/include-media.svg?branch=master)](https://travis-ci.org/eduardoboucas/include-media)
> Simple, elegant and maintainable media queries in Sass

[![NPM badge](https://nodei.co/npm/include-media.png)](https://www.npmjs.com/package/include-media)

## What?

**include-media** is a Sass library for writing CSS media queries in an easy and maintainable way, using a natural and simplistic syntax.

## Why?

I spent quite some time experimenting with different libraries and mixins available out there, but eventually all of them failed to do everything I needed in an elegant way. Some of them wouldn't let me mix set breakpoints with case-specific values, others wouldn't properly handle the CSS OR operator and most of them had a syntax that I found complicated and unnatural.

**include-media** was the result of that experience and it includes all the features I wish I had found before, whilst maintaining a simplistic and natural syntax.

## How to install

- With npm: `npm install include-media`
- With yarn: `yarn add include-media`
- With Bower: `bower install include-media`
- With Rails: `gem 'include_media_rails'` ([maintained by KaoruDev](https://github.com/KaoruDev/include_media_rails))
- Manually: get [this file](https://raw.githubusercontent.com/eduardoboucas/include-media/master/dist/_include-media.scss)

Finally, include the file in your project using an `@import` statement.

## How to use

Examples can be found [here](https://eduardoboucas.github.io/include-media/#features).

## Plugins

- [include-media-export](https://github.com/eduardoboucas/include-media-export) - Reference **include-media** breakpoints in JavaScript.
- [include-media-columns](https://github.com/eduardoboucas/include-media-columns) - Generate column classes using the [BEMIT naming convention](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/), automatically referencing **include-media** breakpoints.
- [include-media-spread](https://github.com/jackmcpickle/include-media-spread) - Calculates the difference between property values and distributes them through your **include-media** breakpoints.
- [flex_e_ble](https://github.com/jackmcpickle/flex_e_ble) - Uses your **include-media** breakpoints to create your own flexible class naming structure on top of a `flex` based grid with `inline-block` fallback for IE8+ compatibility.
- [include-media-grid](https://github.com/tszarzynski/include-media-grid) - An **include-media** plugin for generating grid classes based on the flex display.
- [im-to-em](https://gist.github.com/eduardoboucas/84144cd85cbd2ad4db1ca8b902585ca0) - A tiny function to convert **include-media** breakpoints from `px` to `em`.
- [include-media-hidden-classes](https://github.com/eduardoboucas/include-media-hidden-classes) - An **include-media** plugin to generate classes for hiding elements.
- [Fluid-Size](https://github.com/black7375/Fluid-Size): Use **include-media** breakepoints to provide the `fit size` for the device.

## Learn more

- [https://eduardoboucas.github.io/include-media/](https://eduardoboucas.github.io/include-media/)
- [Documentation](https://eduardoboucas.github.io/include-media/documentation/)
- [Approaches to Media Queries in Sass](https://css-tricks.com/approaches-media-queries-sass/) (CSS-Tricks)
- [Write Simple, Elegant and Maintainable Media Queries with Sass](https://davidwalsh.name/sass-media-query) (David Walsh blog)
- [Generating Alternative Stylesheets for Browsers Without @media](https://davidwalsh.name/generating-alternative-stylesheets-browsers-media) (David Walsh blog)
- [Create Simple Inline Media Queries with include-media](https://webdevstudios.com/2015/05/18/create-simple-inline-media-queries-include-media/) (WebDevStudios)
- [Breakpoints and Tweakpoints in Sass](https://www.sitepoint.com/breakpoints-tweakpoints-sass/) (SitePoint)

## Related projects

- [include-media-or](https://github.com/Nirazul/include-media-or) - A fork of **include-media** with support for complex queries with logical disjunctions (maintained by [Nirazul](https://github.com/Nirazul)).

## The authors

**include-media** was created by [Eduardo Bouças](https://twitter.com/eduardoboucas) and [Kitty Giraudel](https://twitter.com/kittygiraudel). The lead maintainer is [Jack McNicol](https://github.com/jackmcpickle).

## We want to hear from you

We'll be on the lookout for your [issues](https://github.com/eduardoboucas/include-media/issues) and [pull requests](https://github.com/eduardoboucas/include-media/pulls) — but make sure you read [this](https://github.com/eduardoboucas/include-media/blob/master/CONTRIBUTING.md) before submitting any code!

## License

This project is licensed under [the terms of the MIT license](https://github.com/eduardoboucas/include-media/blob/master/LICENSE.md).
