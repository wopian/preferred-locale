import test from 'ava'

import { mergeUserLocales } from './index.js'

test('filters duplicate maximised region locales (en)', t => {
  t.deepEqual(mergeUserLocales(['en-US', 'en-GB', 'en']), ['en-US', 'en-GB'])
})

test('filters duplicate maximised region locales (ar & az)', t => {
  t.deepEqual(
    mergeUserLocales(['ar-DZ', 'ar', 'ar-JO', 'az-AZ', 'az-Cyrl-AZ']),
    ['ar-DZ', 'ar-EG', 'ar-JO', 'az-AZ', 'az-Cyrl-AZ']
  )
})

test('returns language code if languageOnly option is true', t => {
  t.deepEqual(
    mergeUserLocales(['en-US', 'en-GB', 'en', 'az-Cyrl-AZ'], {
      languageOnly: true
    }),
    ['en', 'az']
  )
})

test('returns region code lowercased if regionLowerCase option is true', t => {
  t.deepEqual(
    mergeUserLocales(['en-US', 'en-GB', 'en', 'az-Cyrl-AZ'], {
      regionLowerCase: true
    }),
    ['en-us', 'en-gb', 'az-Cyrl-az']
  )
})

test('returns language only if an invalid or unknown language-only locale is given', t => {
  t.deepEqual(mergeUserLocales(['xx']), ['xx'])
})

test('returns language, script and region when Intl.Locale is not supported', t => {
  const storedIntl = Intl
  // @ts-expect-error - We are testing environment without Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(mergeUserLocales(['en-US', 'en-GB', 'en', 'az-Cyrl-AZ']), [
    'en-US',
    'en-GB',
    'en',
    'az-Cyrl-AZ'
  ])

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})
