import test from 'ava'

import { preferredLocale } from './index.js'

test('returns the fallback if the user locales do not match supported locales', t => {
  t.is(
    preferredLocale({
      fallback: 'jp',
      appLocales: ['jp'],
      options: {
        languageOnly: true
      }
    }),
    'jp'
  )
})

test('returns the user locale if it matches a supported locale', t => {
  t.is(
    preferredLocale({
      fallback: 'jp',
      appLocales: ['jp', 'en'],
      options: {
        languageOnly: true
      }
    }),
    'en'
  )
})
