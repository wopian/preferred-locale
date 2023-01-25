import test from 'ava'

import { preferredLocale } from './index.js'

test('returns the fallback if the user locales do not match supported locales', t => {
  t.is(preferredLocale('ja-JP', ['ja-JP']), 'ja-JP')
})

test('returns the user locale if it matches a supported locale', t => {
  const storedIntl = Intl
  const storedWindow = global.window
  // @ts-expect-error - We are mocking a hardcoded language for consistent tests. Intl cannot modify this
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  global.window = {
    // @ts-expect-error - we are testing the case window.navigator is available
    navigator: {
      languages: ['en-US']
    }
  }

  t.is(preferredLocale('ja-JP', ['ja-JP', 'en-US']), 'en-US')

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
  global.window = storedWindow
})

test('returns the user locale with lowercase region if it matches a supported locale with regionLowerCase', t => {
  const storedIntl = Intl
  const storedWindow = global.window
  // @ts-expect-error - We are mocking a hardcoded language for consistent tests. Intl cannot modify this
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  global.window = {
    // @ts-expect-error - we are testing the case window.navigator is available
    navigator: {
      languages: ['en-US']
    }
  }

  t.is(
    preferredLocale('ja-jp', ['ja-jp', 'en-us'], {
      regionLowerCase: true
    }),
    'en-us'
  )

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
  global.window = storedWindow
})

test('returns the fallback if the user locales do not match supported locales with language only', t => {
  t.is(
    preferredLocale('jp', ['jp'], {
      languageOnly: true
    }),
    'jp'
  )
})

test('returns the user locale if it matches a supported locale with language only', t => {
  t.is(
    preferredLocale('jp', ['jp', 'en'], {
      languageOnly: true
    }),
    'en'
  )
})

test('returns fallback if no app locales provided', t => {
  t.is(preferredLocale('jp', []), 'jp')
})

test('example 1 returns correct response', t => {
  t.is(
    preferredLocale('en-US', ['en-US', 'fr-FR', 'de-DE', 'az-Cyrl-AZ']),
    'en-US'
  )
})

test('example 2 returns correct response', t => {
  t.is(
    preferredLocale('en-US', ['en-US', 'fr-FR', 'de-DE', 'az-Cyrl-AZ'], {
      regionLowerCase: true
    }),
    'en-us'
  )
})

test('example 3 returns correct response', t => {
  t.is(
    preferredLocale('en', ['en', 'fr', 'de', 'az'], {
      languageOnly: true
    }),
    'en'
  )
})
