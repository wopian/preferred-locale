import test from 'ava'

import { userLocales } from './userLocales.js'

test('returns an empty array if window and Intl are not available', t => {
  const storedIntl = Intl
  // @ts-expect-error - we are testing the case where Intl is not available
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(userLocales(), [])

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})

test('returns an array with the browser locale if Intl is available', t => {
  const storedIntl = Intl
  // @ts-expect-error - we are testing the case where Intl is available
  // eslint-disable-next-line no-global-assign
  Intl = {
    DateTimeFormat: () => ({
      resolvedOptions: () => ({
        locale: 'xx-XX'
      })
    })
  }

  t.deepEqual(userLocales(), ['xx-XX'])

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})
