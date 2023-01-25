<h1 align=center>Preferred Locale</h1>

<p align=center>
  <a href="https://github.com/wopian/preferred-locale/actions"><img alt=checks src="https://flat.badgen.net/github/checks/wopian/preferred-locale"></a>
  <a href=https://github.com/sponsors/wopian><img alt=sponsor src='https://flat.badgen.net/badge/sponsor/%E2%9D%A4/pink?icon=github'></a>
</p>

<p align=center>
  <img alt=types src='https://flat.badgen.net/npm/types/preferred-locale'>
  <a href=https://github.com/wopian/preferred-locale/network/dependents><img alt=repoDependants src=https://flat.badgen.net/github/dependents-repo/wopian/preferred-locale></a>
  <a href=https://github.com/wopian/preferred-locale/graphs/contributors><img alt=devDeps src=https://flat.badgen.net/github/contributors/wopian/preferred-locale></a>
</p>

<p align=center>🎌 Get the users' most preferred locale/language from your app's available translations with zero dependencies</p>

#

## Features

- Uses the Intl.Locale API (backwards compatible)
- Works on node & browsers
- Zero dependencies
- TypeScript support

## API Documentation

This library is fully typed with TSDoc examples. View the online documentation here: https://wopian.github.io/preferred-locale/

## Guaranteed Node / Browser Support

|            Package | Package<br>Size | Node | Chrome | Firefox | Safari | Edge |
| -----------------: | :-------------: | :--: | :----: | :-----: | :----: | :--: |
| `preferred-locale` |   ~600 bytes    | 14+  |  69+   |   68+   |  12+   | 18+  |

`preferred-locale@2` is a rewrite of `preferred-locale@1`, written in TypeScript as a native ESM module. If your environment does not support ESM modules, you can continue to use `preferred-locale@1` as the resultant code is identical.

## Why?

Many web applications that automatically detect the browser language and serve the relevent translation are fundamentally broken.

A browser that signals the user prefers the following locales (index `0` being most preferred) should _never_ return content in Japanese (`ja-JP`) if the application has translations for Japanese and American English (`en-US`):

- `[ 'en-GB', 'en', 'ja-JP', 'en-US', 'ja' ]`

Instead, many applications (e.g Epic Games' store, help and documentation) will instead serve their users content in Japanese as they do not provide translations for British English, only American English and only check for exact matches.

`preferred-locale` fixes this by traversing the supported node/browser languages in order of priority:

1. If an exact match is found it uses that (e.g `en-GB` is translated).
2. If the node/browser language is supported but the region is not (e.g Australian English), the canonical region is looked up and tested against (e.g `en-AU` becomes `en-US`),
3. If only a language is provided (e.g `en`), the canonical region is looked up and tested against (e.g `en` becomes `en-US`)
4. If no node/browser locale resolves to a translated locale, the fallback locale is returned

### Live Demo

A step-by-step demonstration of how `preferred-locale@1` works with your own browser locales is available at [eehz9.csb.app](https://eehz9.csb.app).

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

[preferred-locale]: https://github.com/wopian/preferred-locale/tree/master/packages/preferred-locale
[github releases]: https://github.com/wopian/preferred-locale/releases
[contributing]: https://github.com/wopian/preferred-locale/blob/master/CONTRIBUTING.md
[mit]: https://github.com/wopian/preferred-locale/blob/master/LICENSE.md
