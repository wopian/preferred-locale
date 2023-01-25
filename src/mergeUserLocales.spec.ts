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
