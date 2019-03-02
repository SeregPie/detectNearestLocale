# detectNearestLocale

`detectNearestLocale(supportedLocales, preferredLocales)`

Detects the nearest preferred locale.


| argument | description |
| ---: | :--- |
| `supportedLocales` | An array of supported locales. |
| `preferredLocales` | An array of preferred locales. |

Returns the first matching supported locale.

## setup

### npm

```shell
npm install detect-nearest-locale
```

### ES module

```javascript
import detectNearestLocale from 'detect-nearest-locale';
```

### browser

```html
<script src="https://unpkg.com/detect-nearest-locale"></script>
```

## usage

```javascript
let locale = detectNearestLocale(['ru', 'en-US'], ['en-GB', 'de']);
// => 'en-US'
```

## see also

- [detectNearestBrowserLocale](https://github.com/SeregPie/detectNearestBrowserLocale)
