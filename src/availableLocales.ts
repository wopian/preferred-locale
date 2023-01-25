import { getAvailableLanguage, PreferredLocaleOptions } from './index.js'

interface AvailableLocalesProperties {
  userLocales: string[]
  appLocales: string[]
  options?: PreferredLocaleOptions
}

interface MatchToRename {
  index: number
  appLocale: string
}

export const availableLocales = ({
  userLocales,
  appLocales,
  options = {}
}: AvailableLocalesProperties) => {
  const matchesToRename: MatchToRename[] = []
  const matchedLocales = userLocales.filter((userLocale, index) => {
    const formattedUserLocale: string = options.regionLowerCase
      ? userLocale.toLowerCase()
      : userLocale

    // Escape early if the language and region match exactly
    if (appLocales.includes(formattedUserLocale)) return true

    const { isAvailable, appLocale } = getAvailableLanguage({
      userLocale: formattedUserLocale,
      appLocales,
      options
    })

    if (isAvailable) matchesToRename.push({ index, appLocale })

    return isAvailable
  })

  return matchedLocales.map((matchedLocale, index) => {
    if (!matchesToRename || matchesToRename.length === 0) return matchedLocale
    return matchesToRename[index].appLocale
  })
}
