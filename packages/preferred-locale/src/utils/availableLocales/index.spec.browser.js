import { availableLocales } from './'
import * as isLocaleSupported from '../isLocaleSupported'

describe('availableLocales', () => {
  describe('with Intl.Locale supported', () => {
    it('returns \'en-us\' when \'en-us\' is translated but \'en-ca\' is not', () => {
      expect.assertions(1)
      const translated = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      const browser = [
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 }
      ]
      expect(availableLocales(browser, translated, { regionLowerCase: true })).toStrictEqual([
        { locale: 'en-us', priority: 0 }
      ])
    })

    it('returns \'en-ca\' when \'en-ca\' and \'en-us\' are translated', () => {
      expect.assertions(1)
      const translated = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'en-ca', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      const browser = [
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 }
      ]
      expect(availableLocales(browser, translated, { regionLowerCase: true })).toStrictEqual([
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 }
      ])
    })
  })

  describe('without Intl.Locale supported', () => {
    beforeEach(() => {
      jest.spyOn(isLocaleSupported, 'isLocaleSupported').mockReturnValue(false)
    })

    it('returns \'en-us\' when \'en-us\' is translated but \'en-ca\' is not', () => {
      expect.assertions(1)
      const translated = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      const browser = [
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 },
        { locale: 'en', priority: 2 }
      ]
      expect(availableLocales(browser, translated, { regionLowerCase: true })).toStrictEqual([
        { locale: 'en-us', priority: 0 }
      ])
    })

    it('returns \'en-ca\' when \'en-ca\' and \'en-us\' are translated', () => {
      expect.assertions(1)
      const translated = [ 'ar-001', 'ca-es', 'de-de', 'en-gb', 'en-us', 'en-ca', 'eo-uy', 'es-ar', 'es-es', 'es-mx', 'fr-ca', 'fr-fr', 'hu-hu', 'id-id', 'it-it', 'nl-nl', 'pl-pl', 'pt-br', 'pt-pt', 'ru-ru', 'sv-se', 'tl-ph', 'tr-tr' ]
      const browser = [
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 },
        { locale: 'en', priority: 2 }
      ]
      expect(availableLocales(browser, translated, { regionLowerCase: true })).toStrictEqual([
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 }
      ])
    })
  })
})
