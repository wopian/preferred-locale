import test from 'ava'

import { getUserLocales } from './index.js'

test('returns an empty array if window and Intl are not available', t => {
  const storedIntl = Intl
  // @ts-expect-error - we are testing the case where Intl is not available
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  t.deepEqual(getUserLocales(), [])

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

  t.deepEqual(getUserLocales(), ['xx-XX'])

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
})

test('returns a locale if only window.navigator is available', t => {
  const storedIntl = Intl
  const storedWindow = global.window
  // @ts-expect-error - we are testing the case where Intl is not available
  // eslint-disable-next-line no-global-assign
  Intl = undefined

  global.window = {
    // @ts-expect-error - we are testing the case window.navigator is available
    navigator: {
      languages: ['xx-XA']
    }
  }

  t.deepEqual(getUserLocales(), ['xx-XA'])

  // @ts-expect-error - we are restoring the Intl namespace
  // eslint-disable-next-line no-global-assign
  Intl = storedIntl
  global.window = storedWindow
})
