# Media Query Range Syntax Support

include-media now supports modern CSS media query range syntax, which provides a more natural and concise way to write media queries.

## Browser Support

Range syntax is supported in ~95% of browsers according to caniuse.com.

## Configuration

Enable range syntax by setting `$im-use-range-syntax`:

```scss
@use 'include-media' with (
  $im-use-range-syntax: true
);
```

**Default**: `false` (legacy `min-width`/`max-width` syntax for backwards compatibility)

## Examples

### Basic Range Syntax

#### Legacy Syntax (default)
```scss
@use 'include-media' as * with (
  $im-use-range-syntax: false
);

@include media('>phone', '<=tablet') {
  width: 50%;
}
```

Outputs:
```css
@media (min-width: 321px) and (max-width: 768px) {
  width: 50%;
}
```

#### Modern Range Syntax
```scss
@use 'include-media' as * with (
  $im-use-range-syntax: true
);

@include media('>phone', '<=tablet') {
  width: 50%;
}
```

Outputs:
```css
@media (width > 320px) and (width <= 768px) {
  width: 50%;
}
```

### Clamping Syntax

The `&` operator combines two conditions into a single clamped range:

```scss
@use 'include-media' as * with (
  $im-use-range-syntax: true
);

@include media('>phone&<=tablet') {
  width: 50%;
}
```

Outputs:
```css
@media (320px < width <= 768px) {
  width: 50%;
}
```

### Benefits

1. **No interval adjustments**: Range syntax doesn't require the `+1px` or `-1px` hacks
2. **More readable**: `width > 320px` is more intuitive than `min-width: 321px`
3. **Concise clamping**: Combine ranges with `&` operator
4. **Modern standard**: Aligns with CSS specification

### Backwards Compatibility

To maintain compatibility with older browsers, keep `$im-use-range-syntax: false` (the default). Users can opt-in to modern syntax when ready.

## Supported Operators

All operators work with both syntaxes:
- `>` - greater than
- `>=` or `≥` - greater than or equal
- `<` - less than
- `<=` or `≤` - less than or equal

## Clamping Operator

- `&` - combines two conditions (only works with range syntax enabled)

Examples:
- `'>phone&<=tablet'` → `(320px < width <= 768px)`
- `'>=500px&<1200px'` → `(500px <= width < 1200px)`
- `'height>300px&height<=900px'` → `(300px < height <= 900px)`
