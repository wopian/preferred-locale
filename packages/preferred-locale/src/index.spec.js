import preferredLocale from './'

describe('preferredLocale', () => {
  it('returns the fallback locale if no matches found', () => {
    expect.assertions(1)
    const translations = [ 'fr-FR', 'nl-NL', 'id-ID', 'en-US' ]
    expect(preferredLocale(translations, 'en-US'))
      .toBe('en-US')
  })

  it('returns the fallback locale if no matches found (lowercase region)', () => {
    expect.assertions(1)
    const translations = [ 'fr-fr', 'nl-nl', 'id-id', 'en-us' ]
    expect(preferredLocale(translations, 'en-us', { regionLowerCase: true }))
      .toBe('en-us')
  })

  it('returns the fallback locale if no matches found (language only)', () => {
    expect.assertions(1)
    const translations = [ 'fr', 'nl', 'id', 'en' ]
    expect(preferredLocale(translations, 'en', { languageOnly: true }))
      .toBe('en')
  })
})
