import test from 'ava'

import { getAvailableLanguage } from './index.js'

test('marks canonical locale as available when no region is provided', t => {
  t.deepEqual(
    getAvailableLanguage({
      userLocale: 'en',
      appLocales: ['en-US']
    }),
    { isAvailable: true, appLocale: 'en-US' }
  )
})

test('marks canonical locale as available when a different region is provided', t => {
  t.deepEqual(
    getAvailableLanguage({
      userLocale: 'es-MX',
      appLocales: ['es-ES']
    }),
    { isAvailable: true, appLocale: 'es-ES' }
  )
})

test('returns language when languageOnly option is true', t => {
  const storedIntl = Intl
  // @ts-expect-error - We're removing the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(
    getAvailableLanguage({
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

test('returns language only when user locale provides a region to an app with regionless locales', t => {
  const storedIntl = Intl
  // @ts-expect-error - We're removing the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(
    getAvailableLanguage({
      userLocale: 'en-GB',
      appLocales: ['en']
    }),
    { isAvailable: true, appLocale: 'en' }
  )

  // @ts-expect-error - We're restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})

test('exits early if Intl.Locale is not supported, option is not language only and userLocale has no region', t => {
  const storedIntl = Intl
  // @ts-expect-error - We're removing the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(
    getAvailableLanguage({
      userLocale: 'en',
      appLocales: ['en']
    }),
    { isAvailable: false, appLocale: 'en' }
  )

  // @ts-expect-error - We're restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})
