import preferredLocale from './'
import * as isLocaleSupported from './utils/isLocaleSupported'

describe('preferredLocale', () => {
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
  })
})
