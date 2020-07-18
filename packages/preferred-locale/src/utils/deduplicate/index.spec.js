import { deduplicate } from './'

describe('deduplicate', () => {
  it('returns early if a non-array is supplied', () => {
    expect.assertions(5)
    expect(deduplicate()).toBeUndefined()
    expect(deduplicate(null)).toBeNull()
    expect(deduplicate(1)).toBe(1)
    expect(deduplicate('str')).toBe('str')
    expect(deduplicate(
      { locale: 'en' },
      { locale: 'en' }
    )).toStrictEqual(
      { locale: 'en' },
      { locale: 'en' }
    )
  })

  it('deduplicates an array of strings', () => {
    expect.assertions(1)
    expect(deduplicate([ 'en-US', 'en-US', 'en-GB' ]))
      .toStrictEqual([ 'en-US', 'en-GB' ])
  })

  it('deduplicates an array of objects', () => {
    expect.assertions(1)
    expect(deduplicate([
      { locale: 'en-US' },
      { locale: 'en-US' },
      { locale: 'en-GB' }
    ])).toStrictEqual([
      { locale: 'en-US' },
      { locale: 'en-GB' }
    ])
  })

  it('does not deduplicate non-string/object arrays', () => {
    expect.assertions(1)
    expect(deduplicate([ 1, 1, 2 ])).toStrictEqual([ 1, 1, 2 ])
  })
})
