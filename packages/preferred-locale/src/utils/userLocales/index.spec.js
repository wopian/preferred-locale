import { userLocales } from './'

describe('userLocales', () => {
  it('returns the user locale with fallback', () => {
    expect.assertions(1)
    expect(userLocales('en-XX')).toEqual([ 'ja-JP', 'en-XX' ])
  })
})
