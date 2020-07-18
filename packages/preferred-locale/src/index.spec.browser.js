import preferredLocale from './'
import * as isLocaleSupported from './utils/isLocaleSupported'

describe('preferredLocale', () => {
  describe('with Intl.Locale supported', () => {
    it('handles region-less locales', () => {
      expect.assertions(1)
      jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'en', 'en-US' ])
      const translations = [ 'fr-FR', 'id-ID', 'en-US' ]
      expect(preferredLocale(translations, 'en-US')).toBe('en-US')
    })

    it('returns \'en-us\' with \'en-CA, en-US and en\' and \'en-us\' fallback (en-ca not translated)', () => {
      expect.assertions(1)
      jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'en-CA', 'en-US', 'en' ])
      const translations = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'en-ca', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      expect(preferredLocale(translations, 'en-us', { regionLowerCase: true })).toBe('en-ca')
    })

    it('returns \'en-ca\' with \'en-CA, en-US and en\' and \'en-us\' fallback (en-ca translated)', () => {
      expect.assertions(1)
      jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'en-CA', 'en-US', 'en' ])
      const translations = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'en-ca', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      expect(preferredLocale(translations, 'en-us', { regionLowerCase: true })).toBe('en-ca')
    })
  })

  describe('without Intl.Locale supported', () => {
    beforeEach(() => {
      jest.spyOn(isLocaleSupported, 'isLocaleSupported').mockReturnValue(false)
    })

    it('handles region-less locales', () => {
      expect.assertions(1)
      jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'en', 'en-US' ])
      const translations = [ 'fr-FR', 'id-ID', 'en-US' ]
      expect(preferredLocale(translations, 'en-US')).toBe('en-US')
    })

    it('returns \'en-us\' with \'en-CA, en-US and en\' and \'en-us\' fallback (en-ca not translated)', () => {
      expect.assertions(1)
      jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'en-CA', 'en-US', 'en' ])
      const translations = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'en-ca', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      expect(preferredLocale(translations, 'en-us', { regionLowerCase: true })).toBe('en-ca')
    })

    it('returns \'en-ca\' with \'en-CA, en-US and en\' and \'en-us\' fallback (en-ca translated)', () => {
      expect.assertions(1)
      jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'en-CA', 'en-US', 'en' ])
      const translations = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'en-ca', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      expect(preferredLocale(translations, 'en-us', { regionLowerCase: true })).toBe('en-ca')
    })
  })
})
