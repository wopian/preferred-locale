import { unifyUserLocales } from './'
import * as isLocaleSupported from '../isLocaleSupported'

describe('preferredLocale', () => {
  if (Intl && 'Locale' in Intl) {
    describe('with Intl.Locale supported', () => {
      it('returns \'en-ca and en-us\' with \'en-CA, en-US, en and \'en-us\'', () => {
        expect.assertions(1)
        expect(unifyUserLocales([ 'en-CA', 'en-US', 'en', 'en-us' ], { regionLowerCase: true })).toStrictEqual([
          { locale: 'en-ca', priority: 0 },
          { locale: 'en-us', priority: 1 }
        ])
      })
    })
  }

  describe('without Intl.Locale supported', () => {
    beforeEach(() => {
      jest.spyOn(isLocaleSupported, 'isLocaleSupported').mockReturnValue(false)
    })

    it('returns \'en-ca, en-us and en\' with \'en-CA, en-US, en and \'en-us\'', () => {
      expect.assertions(1)
      expect(unifyUserLocales([ 'en-CA', 'en-US', 'en', 'en-us' ], { regionLowerCase: true })).toStrictEqual([
        { locale: 'en-ca', priority: 0 },
        { locale: 'en-us', priority: 1 },
        { locale: 'en', priority: 2 }
      ])
    })
  })
})
