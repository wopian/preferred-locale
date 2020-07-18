import { userLocales } from './'

describe('userLocales', () => {
  it('returns the fallback if window and Intl is not available', () => {
    expect.assertions(1)
    const storedIntl = Intl
    const storedWindow = window
    // eslint-disable-next-line no-global-assign
    Intl = undefined
    // eslint-disable-next-line no-global-assign
    window = undefined
    expect(userLocales('en-XX')).toEqual([ 'en-XX' ])
    // eslint-disable-next-line no-global-assign
    Intl = storedIntl
    // eslint-disable-next-line no-global-assign
    window = storedWindow
  })
})
