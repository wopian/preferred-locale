import { availableLocales } from './'

describe('availableLocales', () => {
  it('returns available locales', () => {
    expect.assertions(1)

    const translated = [ 'fr-FR', 'nl-NL' ]
    const browser = [
      { locale: 'nl-NL', priority: 0 },
      { locale: 'en-GB', priority: 1 },
      { locale: 'en-US', priority: 2 }
    ]

    expect(availableLocales(browser, translated))
      .toStrictEqual([
        { locale: 'nl-NL', priority: 0 }
      ])
  })

  it('returns available locales (lowercase region)', () => {
    expect.assertions(1)

    const translated = [ 'fr-fr', 'nl-nl' ]
    const browser = [
      { locale: 'nl-nl', priority: 0 },
      { locale: 'en-gb', priority: 1 },
      { locale: 'en-us', priority: 2 }
    ]

    expect(availableLocales(browser, translated, { lowerCaseRegion: true }))
      .toStrictEqual([
        { locale: 'nl-nl', priority: 0 }
      ])
  })

  it('returns available locales (language only with browser regions)', () => {
    expect.assertions(1)

    const translated = [ 'fr', 'nl' ]
    const browser = [
      { locale: 'nl-NL', priority: 0 },
      { locale: 'en-GB', priority: 1 },
      { locale: 'en-US', priority: 2 }
    ]

    expect(availableLocales(browser, translated))
      .toStrictEqual([
        { locale: 'nl', priority: 0 }
      ])
  })

  it('returns available locales (language only without browser regions)', () => {
    expect.assertions(1)

    const translated = [ 'fr', 'nl' ]
    const browser = [
      { locale: 'nl', priority: 0 },
      { locale: 'en', priority: 1 }
    ]

    expect(availableLocales(browser, translated))
      .toStrictEqual([
        { locale: 'nl', priority: 0 }
      ])
  })
})
