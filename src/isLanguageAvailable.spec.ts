import test from 'ava'

import { isLanguageAvailable } from './isLanguageAvailable.js'

test('marks canonical locale as available when no region is provided', t => {
  t.is(
    isLanguageAvailable({
      userLocale: 'en',
      appLocales: ['en-US'],
      index: 0,
      array: ['en-US']
    }),
    true
  )
})

test('marks canonical locale as available when a different region is provided', t => {
  t.is(
    isLanguageAvailable({
      userLocale: 'es-MX',
      appLocales: ['es-ES'],
      index: 0,
      array: ['es-ES']
    }),
    true
  )
})

test('returns early for older browsers when languageOnly option is true', t => {
  const storedIntl = Intl
  // @ts-expect-error - We're removing the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.is(
    isLanguageAvailable({
      userLocale: 'en',
      appLocales: ['en'],
      index: 0,
      array: ['en-US'],
      options: {
        languageOnly: true
      }
    }),
    true
  )

  // @ts-expect-error - We're restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})
