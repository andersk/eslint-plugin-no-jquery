# no-map

Disallows the [`.map`](https://api.jquery.com/map/) method and [`$.map`](https://api.jquery.com/jQuery.map/) utility. Prefer `Array#map`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.map();
$( 'div' ).map();
$div.map();
$( 'div' ).first().map();
$( 'div' ).append( $( 'input' ).map() );
$( 'select' ).val( [] ).map();
```

✔️ Examples of **correct** code:
```js
map();
[].map();
div.map();
div.map;
$( 'div' ).toArray().map();
$( 'select' ).val().map();
```

## Resources

* [Rule source](/src/rules/no-map.js)
* [Test source](/src/tests/no-map.js)