# no-unbind

Disallows the [`.unbind`](https://api.jquery.com/unbind/) method. Prefer `.off`/`EventTarget#removeEventListener`.

⚠️ This rule is deprecated. Use [`no-bind`](no-bind.md) instead.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).unbind();
$div.unbind();
$( 'div' ).first().unbind();
$( 'div' ).append( $( 'input' ).unbind() );
```

✔️ Examples of **correct** code:
```js
unbind();
[].unbind();
div.unbind();
div.unbind;
```

## Resources

* [Rule source](/src/rules/no-unbind.js)
* [Test source](/src/tests/no-unbind.js)