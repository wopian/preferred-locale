import { PreferredLocaleOptions } from './index.js'
import { isLanguageAvailable } from './isLanguageAvailable.js'

interface AvailableLocalesProperties {
  userLocales: string[]
  appLocales: string[]
  options?: PreferredLocaleOptions
}

export const availableLocales = ({
  userLocales,
  appLocales,
  options = {}
}: AvailableLocalesProperties) =>
  userLocales.filter((userLocale, index, array) => {
    const formattedUserLocale = options.regionLowerCase
      ? userLocale.toLowerCase()
      : userLocale

    // Escape early if the language and region match exactly
    if (appLocales.includes(formattedUserLocale)) return true

    console.log('formattedUserLocale', formattedUserLocale)
    console.log(isLanguageAvailable({
      userLocale: formattedUserLocale,
      appLocales,
      index,
      array,
      options
    }))

    return isLanguageAvailable({
      userLocale: formattedUserLocale,
      appLocales,
      index,
      array,
      options
    })
  })
