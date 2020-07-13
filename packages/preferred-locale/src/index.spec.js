import preferredLocale from './'
import * as isLocaleSupported from './utils/isLocaleSupported'

describe('preferredLocale', () => {
  describe('with Intl.Locale supported', () => {
    it('returns the fallback locale if no matches found', () => {
      expect.assertions(1)
      const translations = [ 'fr-FR', 'nl-NL', 'id-ID', 'en-US' ]
      expect(preferredLocale(translations, 'en-US'))
        .toBe('en-US')
    })

    it('returns the fallback locale if no matches found (regionLowerCase)', () => {
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

    it('returns the the preferred locale if match found', () => {
      expect.assertions(1)
      const translations = [ 'fr-FR', 'ja-JP', 'id-ID', 'en-US' ]
      expect(preferredLocale(translations, 'en-US'))
        .toBe('ja-JP')
    })

    it('returns the the preferred locale if match found (regionLowerCase)', () => {
      expect.assertions(1)
      const translations = [ 'fr-fr', 'ja-jp', 'id-id', 'en-us' ]
      expect(preferredLocale(translations, 'en-us', { regionLowerCase: true }))
        .toBe('ja-jp')
    })

    it('returns the the preferred locale if match found (language only)', () => {
      expect.assertions(1)
      const translations = [ 'fr', 'ja', 'id', 'en' ]
      expect(preferredLocale(translations, 'en', { languageOnly: true }))
        .toBe('ja')
    })
  })

  describe('without Intl.Locale supported', () => {
    beforeEach(() => {
      jest.spyOn(isLocaleSupported, 'isLocaleSupported').mockReturnValue(false)
    })

    it('returns the fallback locale if no matches found', () => {
      expect.assertions(1)
      const translations = [ 'fr-FR', 'nl-NL', 'id-ID', 'en-US' ]
      expect(preferredLocale(translations, 'en-US'))
        .toBe('en-US')
    })

    it('returns the fallback locale if no matches found (regionLowerCase)', () => {
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

    it('returns the the preferred locale if match found', () => {
      expect.assertions(1)
      const translations = [ 'fr-FR', 'ja-JP', 'id-ID', 'en-US' ]
      expect(preferredLocale(translations, 'en-US'))
        .toBe('ja-JP')
    })

    it('returns the the preferred locale if match found (regionLowerCase)', () => {
      expect.assertions(1)
      const translations = [ 'fr-fr', 'ja-jp', 'id-id', 'en-us' ]
      expect(preferredLocale(translations, 'en-us', { regionLowerCase: true }))
        .toBe('ja-jp')
    })

    it('returns the the preferred locale if match found (language only)', () => {
      expect.assertions(1)
      const translations = [ 'fr', 'ja', 'id', 'en' ]
      expect(preferredLocale(translations, 'en', { languageOnly: true }))
        .toBe('ja')
    })
  })
})
