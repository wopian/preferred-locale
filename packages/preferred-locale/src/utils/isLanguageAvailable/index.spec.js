import { isLanguageAvailable } from './'
import * as isLocaleSupported from '../isLocaleSupported'

describe('isLanguageAvailable', () => {
  describe('with Intl.Locale supported', () => {
    it('returns true if language is available but region wasn\'t', () => {
      expect.assertions(1)

      const translated = [ 'en-US' ]
      const browser = 'en-GB'
      const index = 0
      const array = [ { locale: 'en-US', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(true)
    })

    it('returns true if language is available but region wasn\'t (lowercase region inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en-us' ]
      const browser = 'en-gb'
      const index = 0
      const array = [ { locale: 'en-us', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(true)
    })

    it('returns true if language is available (language only inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en' ]
      const browser = 'en-gb'
      const index = 0
      const array = [ { locale: 'en', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(true)
    })

    it('returns false if language and region aren\'t available', () => {
      expect.assertions(1)

      const translated = [ 'en-US' ]
      const browser = 'fr-FR'
      const index = 0
      const array = [ { locale: 'en-US', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(false)
    })

    it('returns false if language and region aren\'t available (lowercase region inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en-us' ]
      const browser = 'fr-fr'
      const index = 0
      const array = [ { locale: 'en-us', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(false)
    })

    it('returns false if language isn\'t available (language only inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en' ]
      const browser = 'fr-fr'
      const index = 0
      const array = [ { locale: 'en', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(false)
    })
  })

  describe('without Intl.Locale supported', () => {
    beforeEach(() => {
      jest.spyOn(isLocaleSupported, 'isLocaleSupported').mockReturnValue(false)
    })

    it('returns true if language is available but region wasn\'t', () => {
      expect.assertions(1)

      const translated = [ 'en-US' ]
      const browser = 'en-GB'
      const index = 0
      const array = [ { locale: 'en-US', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(true)
    })

    it('returns true if language is available but region wasn\'t (lowercase region inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en-us' ]
      const browser = 'en-gb'
      const index = 0
      const array = [ { locale: 'en-us', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(true)
    })

    it('returns true if language is available (language only inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en' ]
      const browser = 'en-gb'
      const index = 0
      const array = [ { locale: 'en', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(true)
    })

    it('returns false if language and region aren\'t available', () => {
      expect.assertions(1)

      const translated = [ 'en-US' ]
      const browser = 'fr-FR'
      const index = 0
      const array = [ { locale: 'en-US', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(false)
    })

    it('returns false if language and region aren\'t available (lowercase region inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en-us' ]
      const browser = 'fr-fr'
      const index = 0
      const array = [ { locale: 'en-us', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(false)
    })

    it('returns false if language isn\'t available (language only inputs)', () => {
      expect.assertions(1)

      const translated = [ 'en' ]
      const browser = 'fr-fr'
      const index = 0
      const array = [ { locale: 'en', priority: 0 } ]

      expect(isLanguageAvailable(browser, translated, index, array))
        .toBe(false)
    })
  })
})
