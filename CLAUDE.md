# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

include-media is a Sass library for writing CSS media queries in an easy and maintainable way. It provides a simple, elegant syntax for defining responsive breakpoints and media expressions.

**Version 2.0+**: Only supports Dart Sass 1.25+ (no longer supports LibSass or Ruby Sass).

## Development Commands

### Testing
```bash
npm test                 # Run linting and all tests (builds first)
npm run sassTest        # Run Sass compilation test using sass-true
mocha                   # Run tests directly (requires build first)
```

### Building
```bash
npm run build           # Concatenate source files into dist/_include-media.scss
npm run postbuild       # Auto-runs after build to replace @version@ with package version
```

### Linting
```bash
npm run lint            # Check formatting with Prettier (pre-commit hook)
prettier --check src    # Same as lint
prettier --write src    # Auto-fix formatting
```

### Documentation
```bash
npm run docs            # Generate SassDoc documentation
npm run deploy          # Deploy docs to gh-pages branch
```

## Architecture

### Build Process

The library is built by concatenating multiple source files into a single distributable file:

1. **Source files** (concatenated in order):
   - `banner.txt` - License header
   - `src/_config.scss` - Configuration variables and defaults
   - `src/helpers/*.scss` - Helper functions
   - `src/plugins/*.scss` - Plugin features
   - `src/_media.scss` - Main `@media` mixin (the public API)

2. **Post-build**: `replace.mjs` replaces `@version@` placeholder with the current version from package.json

3. **Output**: `dist/_include-media.scss` - Single distributable file

### Core Architecture

**Configuration Layer** (`src/_config.scss`):
- `$breakpoints` - Named breakpoints map (e.g., 'phone': 320px)
- `$media-expressions` - Static expressions (e.g., 'retina2x', 'landscape')
- `$unit-intervals` - Interval adjustments for exclusive operators (>, <)
- `$im-media-support` - Enable/disable media query support (for legacy browsers)
- `$im-no-media-breakpoint` - Static breakpoint when media queries disabled
- `$im-no-media-expressions` - Allowed expressions when media queries disabled

**Parser Engine** (`src/helpers/_parser.scss`):
Core parsing functions that convert natural syntax into valid media queries:
- `parse-expression()` - Main parser, converts expressions to media query strings
- `get-expression-operator()` - Extracts operators: `>=`, `>`, `<=`, `<`, `≥`, `≤`
- `get-expression-dimension()` - Extracts dimension (width, height, etc.)
- `get-expression-prefix()` - Determines min/max prefix based on operator
- `get-expression-value()` - Extracts and resolves value (handles breakpoint names and unit intervals)

**Helper Functions**:
- `_to-number.scss` - Converts strings to numbers with units
- `_slice.scss` - Array slicing for recursive media query processing
- `_trim.scss` - String trimming utility
- `_no-media.scss` - Logic for handling no-media-query fallbacks

**Public API** (`src/_media.scss`):
- `@mixin media($conditions...)` - Main mixin accepting multiple conditions
  - Recursively processes conditions to support nested media queries
  - Handles both media query and no-media-query modes

### Testing Strategy

Tests use `sass-true` library (unit testing for Sass):
- `test/index.js` - Mocha runner that executes sass-true tests
- `test/index.scss` - Main test file forwarding individual test modules
- `test/functions/*.scss` - Unit tests for each helper function
- `test/nesting.scss` - Tests for nested media query behavior

Tests compile to `test/output/*.css` for verification.

## Important Dart Sass Compatibility Notes

When working with Sass code in this repository:

1. **Use built-in modules**: `@use 'sass:math'`, `@use 'sass:map'`, `@use 'sass:list'`, `@use 'sass:string'`, `@use 'sass:meta'`
2. **Avoid deprecated features**:
   - Use `if()` function carefully (deprecated warnings in Dart Sass 1.95.0+)
   - Prefer `list.slash()` for slash-separated lists
3. **Module system**: All Sass built-ins must be accessed via namespaced modules (not global functions)

## Code Style

- Follow [Sass Guidelines](http://sass-guidelin.es)
- Document all public variables, functions, and mixins with SassDoc
- Prioritize simplicity over complexity
- Prettier formatting enforced via pre-commit hook (config in `.prettierrc.json`)

## Plugin System

The library supports plugins (e.g., `_tweakpoints.scss`) that extend core functionality. Plugins are concatenated during build and become part of the distributed file.

## Package Manager Support

The library supports multiple package managers and module systems:
- npm/yarn/pnpm via package.json `exports` field
- Eyeglass module system via `eyeglass-exports.js`
- Manual download of dist file

## Range Syntax Feature

As of version 2.x, include-media supports modern CSS media query range syntax:

**Configuration**: Set `$im-use-range-syntax: true` to enable (default: `false` for backwards compatibility)

**Traditional syntax**: `@include media('>phone', '<=tablet')` → `@media (min-width: 321px) and (max-width: 768px)`

**Range syntax**: `@include media('>phone', '<=tablet')` → `@media (width > 320px) and (width <= 768px)`

**Clamping**: `@include media('>phone&<=tablet')` → `@media (320px < width <= 768px)`

When range syntax is enabled:
- Unit interval adjustments (+1px for >, -1px for <) are disabled
- Operators are inverted in output (>phone becomes phone < width)
- The `&` operator combines two conditions into a clamped range

See RANGE_SYNTAX.md for detailed documentation and examples.
