import test from 'ava'

import { isLocaleSupported } from './index.js'

test('returns true if Intl.Locale is implemented', t => {
  t.is(isLocaleSupported, true)
})
