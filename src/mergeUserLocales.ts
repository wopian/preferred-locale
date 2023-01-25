import { isLocaleSupported, PreferredLocaleOptions } from './index.js'

/**
 * Merge duplicate locales, prioritised by insertion order
 *
 * @param locales - An array of locales
 * @param [options] - Options for the function
 * @returns An array of deduplicated locales in order of preference
 * @example
 * import { mergeUserLocales } from 'preferred-locale'
 *
 * mergeUserLocales(['en-US', 'en-US', 'en', 'az-Cyrl-AZ']) // ['en-US', 'az-Cyrl-AZ']
 *
 * mergeUserLocales(['en-US', 'en-US', 'en', 'az-Cyrl-AZ'], { regionLowerCase: true }) // ['en-us', 'az-Cyrl-az']
 *
 * mergeUserLocales(['en-US', 'en-US', 'en', 'az-Cyrl-AZ'], { languageOnly: true }) // ['en', 'az']
 */
export const mergeUserLocales = (
  locales: string[],
  options: PreferredLocaleOptions = {}
): string[] => {
  if (!options?.regionLowerCase) options.regionLowerCase = false
  if (!options?.languageOnly) options.languageOnly = false

  const prioritisedLocales = locales.map(locale => {
    const components = locale.split('-')

    if (options.languageOnly) return components[0]

    const maximised = isLocaleSupported()
      ? new Intl.Locale(locale).maximize()
      : {
          language: components[0],
          script: components.length === 3 ? components[1] : undefined,
          region: components.length === 3 ? components[2] : components[1]
        }

    const { language, script } = maximised
    let { region } = maximised

    if (options.regionLowerCase && region) {
      region = region.toLowerCase()
    }

    // e.g app supports az-Cyrl-AZ for Cyrllic script and az-AZ for Latin script
    if (components.length > 2) {
      return `${language}-${script}-${region}`
    } else if (region) {
      return `${language}-${region}`
    } else {
      return language
    }
  })

  return [...new Set(prioritisedLocales)]
}
