import { getAvailableLanguage, PreferredLocaleOptions } from './index.js'

interface MatchToRename {
  index: number
  appLocale: string
}

/**
 * Gets locales that are in both the user's environment and the app translations
 * @param userLocales The locales from the user's environment
 * @param appLocales The locales translated by the app
 * @param [options] Options for the function
 * @returns An array of locales that are in both
 * @example
 * import { availableLocales } from 'preferred-locale'
 *
 * availableLocales(['en-US', 'fr-FR'], ['en-US', 'fr-FR', 'de-DE', 'az-Cyrl-AZ']) // ['en-US', 'fr-FR']
 *
 * availableLocales(['en-GB', 'fr-FR'], ['en-US', 'fr-FR']) // ['en-US', 'fr-FR']
 *
 * availableLocales(['es-MX'], ['es-ES'], {
 *  regionLowerCase: true
 * }) // ['es-es']
 */
export const availableLocales = (
  userLocales: string[],
  appLocales: string[],
  options: PreferredLocaleOptions = {}
) => {
  const matchesToRename: MatchToRename[] = []
  const matchedLocales = userLocales.filter((userLocale, index) => {
    const formattedUserLocale: string = options.regionLowerCase
      ? userLocale.toLowerCase()
      : userLocale

    // Escape early if the language and region match exactly
    if (appLocales.includes(formattedUserLocale)) {
      matchesToRename.push({ index, appLocale: formattedUserLocale })
      return true
    }

    const { isAvailable, appLocale } = getAvailableLanguage(
      formattedUserLocale,
      appLocales,
      options
    )

    if (isAvailable)
      matchesToRename.push({
        index,
        appLocale: options.regionLowerCase ? appLocale.toLowerCase() : appLocale
      })

    return isAvailable
  })

  return matchedLocales.map((matchedLocale, index) => {
    if (!matchesToRename || matchesToRename.length === 0) return matchedLocale
    return matchesToRename[index]?.appLocale
  })
}
