import test from 'ava'

import { isLanguageAvailable } from './isLanguageAvailable.js'

test('marks canonical locale as available when no region is provided', t => {
  t.deepEqual(
    isLanguageAvailable({
      userLocale: 'en',
      appLocales: ['en-US']
    }),
    { isAvailable: true, appLocale: 'en-US' }
  )
})

test('marks canonical locale as available when a different region is provided', t => {
  t.deepEqual(
    isLanguageAvailable({
      userLocale: 'es-MX',
      appLocales: ['es-ES']
    }),
    { isAvailable: true, appLocale: 'es-ES' }
  )
})

test('returns early for older browsers when languageOnly option is true', t => {
  const storedIntl = Intl
  // @ts-expect-error - We're removing the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(
    isLanguageAvailable({
      userLocale: 'en',
      appLocales: ['en'],
      options: {
        languageOnly: true
      }
    }),
    { isAvailable: true, appLocale: 'en' }
  )

  // @ts-expect-error - We're restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})
