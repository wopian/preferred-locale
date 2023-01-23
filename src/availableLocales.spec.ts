import test from 'ava'

import { availableLocales } from './availableLocales.js'

test('returns an empty array if no locales are available', t => {
  t.deepEqual(availableLocales(['xx-XX'], []), [])
})

test('returns a locale if one matches', t => {
  t.deepEqual(availableLocales(['xx-XX'], [{ locale: 'xx-XX', priority: 0 }]), [
    {
      locale: 'xx-XX',
      priority: 0
    }
  ])
})

test('returns locales if one or more matches', t => {
  t.deepEqual(
    availableLocales(
      ['xx-XX', 'en-GB', 'en-US'],
      [
        { locale: 'en-GB', priority: 0 },
        { locale: 'en-US', priority: 1 }
      ]
    ),
    [
      {
        locale: 'en-GB',
        priority: 0
      },
      {
        locale: 'en-US',
        priority: 1
      }
    ]
  )
})
