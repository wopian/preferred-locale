import preferredLocale from 'preferred-locale'

describe('preferredLocale', () => {
  it('is not implemented', () => {
    expect.assertions(1)
    expect(preferredLocale([], 'en-us')).toBe('en-us')
  })
})
