import { unifyUserLocales } from './'
import * as isLocaleSupported from '../isLocaleSupported'

describe('unifyUserLocales', () => {
  if (Intl && 'Locale' in Intl) {
    describe('with Intl.Locale support', () => {
      it('unifies browser locales', () => {
        expect.assertions(1)
        expect(unifyUserLocales([ 'en', 'en-US', 'en-GB' ]))
          .toStrictEqual([
            { locale: 'en-US', priority: 0 },
            { locale: 'en-GB', priority: 2 }
          ])
      })

      it('unifies browser locales to lowercase with options', () => {
        expect.assertions(1)
        expect(unifyUserLocales([ 'en', 'en-US', 'en-GB' ], { regionLowerCase: true }))
          .toStrictEqual([
            { locale: 'en-us', priority: 0 },
            { locale: 'en-gb', priority: 2 }
          ])
      })

      it('unifies browser locales to language only with options', () => {
        expect.assertions(1)
        expect(unifyUserLocales([ 'en', 'en-US', 'en-GB' ], { languageOnly: true }))
          .toStrictEqual([
            { locale: 'en', priority: 0 }
          ])
      })
    })
  }

  describe('without Intl.Locale support', () => {
    beforeEach(() => {
      jest.spyOn(isLocaleSupported, 'isLocaleSupported').mockReturnValue(false)
    })

    it('unifies browser locales', () => {
      expect.assertions(1)
      expect(unifyUserLocales([ 'en', 'en-US', 'en-GB' ]))
        .toStrictEqual([
          { locale: 'en', priority: 0 },
          { locale: 'en-US', priority: 1 },
          { locale: 'en-GB', priority: 2 }
        ])
    })

    it('unifies browser locales to lowercase with options', () => {
      expect.assertions(1)
      expect(unifyUserLocales([ 'en', 'en-US', 'en-GB' ], { regionLowerCase: true }))
        .toStrictEqual([
          { locale: 'en', priority: 0 },
          { locale: 'en-us', priority: 1 },
          { locale: 'en-gb', priority: 2 }
        ])
    })

    it('unifies browser locales to language only with options', () => {
      expect.assertions(1)
      expect(unifyUserLocales([ 'en', 'en-US', 'en-GB' ], { languageOnly: true }))
        .toStrictEqual([
          { locale: 'en', priority: 0 }
        ])
    })
  })
})
