import { isLocaleSupported } from './'

afterEach(() => {
  jest.clearAllMocks()
})

describe('isLocaleSupported', () => {
  it('returns false if Intl.Locale is not implemented', () => {
    expect.assertions(1)
    const storedIntl = Intl
    // eslint-disable-next-line no-global-assign
    Intl = undefined
    expect(isLocaleSupported()).toBe(false)
    // eslint-disable-next-line no-global-assign
    Intl = storedIntl
  })

  if (Intl && 'Locale' in Intl) {
    it('returns true if Intl.Locale is spec compliant', () => {
      expect.assertions(1)
      expect(isLocaleSupported()).toBe(true)
    })
  }
})
