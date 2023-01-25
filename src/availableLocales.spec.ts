import test from 'ava'

import { availableLocales } from './availableLocales.js'

test('returns an empty array if no locales are available', t => {
  t.deepEqual(
    availableLocales({
      userLocales: [],
      appLocales: ['xx-XX']
    }),
    []
  )
})

test('returns a locale if one matches', t => {
  t.deepEqual(
    availableLocales({ userLocales: ['xx-XX'], appLocales: ['xx-XX'] }),
    ['xx-XX']
  )
})

test('returns locales if one or more matches', t => {
  t.deepEqual(
    availableLocales({
      userLocales: ['en-GB', 'en-US'],
      appLocales: ['xx-XX', 'en-GB', 'en-US']
    }),
    ['en-GB', 'en-US']
  )
})

test.only('returns canonical locale if user has language but not region', t => {
  t.deepEqual(
    availableLocales({
      userLocales: ['es-MX'],
      appLocales: ['es-ES']
    }),
    ['es-ES']
  )
})
