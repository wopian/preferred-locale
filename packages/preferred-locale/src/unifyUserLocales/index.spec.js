import unifyUserLocales from './'

describe('unifyUserLocales', () => {
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
