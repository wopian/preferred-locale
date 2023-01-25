import test from 'ava'

import { availableLocales } from './index.js'

test('returns an empty array if no locales are available', t => {
  t.deepEqual(availableLocales([], ['xx-XX']), [])
})

test('returns a locale if one matches', t => {
  t.deepEqual(availableLocales(['xx-XX'], ['xx-XX']), ['xx-XX'])
})

test('returns locales if one or more matches', t => {
  t.deepEqual(
    availableLocales(['en-GB', 'en-US'], ['xx-XX', 'en-GB', 'en-US']),
    ['en-GB', 'en-US']
  )
})

test('returns canonical locale if user has language but not region', t => {
  t.deepEqual(availableLocales(['es-MX'], ['es-ES']), ['es-ES'])
})

test('example 1 returns correct result', t => {
  t.deepEqual(
    availableLocales(
      ['en-US', 'fr-FR'],
      ['en-US', 'fr-FR', 'de-DE', 'az-Cyrl-AZ']
    ),
    ['en-US', 'fr-FR']
  )
})

test('example 2 returns correct result', t => {
  t.deepEqual(availableLocales(['en-GB', 'fr-FR'], ['en-US', 'fr-FR']), [
    'en-US',
    'fr-FR'
  ])
})

test('example 3 returns correct result', t => {
  t.deepEqual(
    availableLocales(['es-MX'], ['es-ES'], {
      regionLowerCase: true
    }),
    ['es-es']
  )
})
