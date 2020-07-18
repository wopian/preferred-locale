import { userLocales } from './'

describe('userLocales', () => {
  it('returns the fallback if window and Intl is not available', () => {
    expect.assertions(1)
    const storedIntl = Intl
    // eslint-disable-next-line no-global-assign
    Intl = undefined
    expect(userLocales('en-XX')).toEqual([ 'en-XX' ])
    // eslint-disable-next-line no-global-assign
    Intl = storedIntl
  })
})
