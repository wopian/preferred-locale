<h1 align=center>Preferred Locale</h1>

<p align=center>
  <a href="https://david-dm.org/wopian/preferred-locale?path=packages/preferred-locale"><img alt=deps src="https://flat.badgen.net/david/dep/wopian/preferred-locale/packages/preferred-locale"></a>
  <a href="https://david-dm.org/wopian/preferred-locale?type=dev"><img alt=devDeps src=https://flat.badgen.net/david/dev/wopian/preferred-locale></a>
  <a href=https://github.com/wopian/preferred-locale/graphs/contributors><img alt=contributors src=https://flat.badgen.net/github/contributors/wopian/preferred-locale></a>
</p>

<p align=center>🎌 Get the users' most preferred locale/language from your app's available translations with zero dependencies</p>

#

This is a monorepo containing the following packages:

- [preferred-locale]

## Features

- Uses the Intl.Locale API (backwards compatible)
- Works on node & browsers
- Zero dependencies

## Guaranteed Node / Browser Support

| Package            | Package<br>Size | Node | Chrome | Firefox | Safari | Edge |
| -----------------: | :-------------: | :--: | :----: | :-----: | :----: | :--: |
| `preferred-locale` | ~580 bytes      | 10+  | 69+    | 68+     | 12+    | 18+  |

## Why?

Many web applications that automatically detect the browser language and serve the relevent translation are fundamentally broken.

A browser that signals the user prefers the following locales (index `0` being most preferred) should *never* return content in Japanese (`ja-JP`) if the application has translations for Japanese and American English (`en-US`):

- `[ 'en-GB', 'en', 'ja-JP', 'en-US', 'ja' ]`

Instead, many applications (e.g Epic Games' store, help and documentation) will instead serve their users content in Japanese as they do not provide translations for British English, only American English and only check for exact matches.

`preferred-locale` fixes this by traversing the supported node/browser languages in order of priority:

1. If an exact match is found it uses that (e.g `en-GB` is translated).
2. If the node/browser language is supported but the region is not (e.g Australian English), the canonical region is looked up and tested against (e.g `en-AU` becomes `en-US`),
3. If only a language is provided (e.g `en`), the canonical region is looked up and tested against (e.g `en` becomes `en-US`)
4. If no node/browser locale resolves to a translated locale, the fallback locale is returned

### Live Demo

A step-by-step demonstration of how `preferred-locale` works with your own browser locales is available at [eehz9.csb.app](https://eehz9.csb.app).

### Example Step-By-Step

Application has translations for `en-US` and `ja-JP`

1. Raw browser locales `[ 'en-GB', 'en', 'ja-JP', 'en-US', 'ja' ]`

2. Unify the browser locales `[ 'en-GB', 'en-US', 'ja-JP', 'en-US', 'ja-JP' ]`

3. Deduplicate the locales `[ 'en-GB', 'en-US', 'ja-JP' ]`

4. Remove locales not translated `[ 'en-US', 'ja-JP' ]`

5. User gets content in `en-US`

## Contributing

See [CONTRIBUTING]

## Releases

See [Github Releases]

## License

All code released under [MIT]

[preferred-locale]:https://github.com/wopian/preferred-locale/tree/master/packages/preferred-locale

[github releases]: https://github.com/wopian/preferred-locale/releases

[contributing]: https://github.com/wopian/preferred-locale/blob/master/CONTRIBUTING.md

[mit]: https://github.com/wopian/preferred-locale/blob/master/LICENSE.md
