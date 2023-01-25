import { isLocaleSupported, PreferredLocaleOptions } from './index.js'

export interface IsLanguageAvailableProperties {
  userLocale: string
  appLocales: string[]
  options?: PreferredLocaleOptions
}

export const isLanguageAvailable = ({
  userLocale,
  appLocales,
  options = {}
}: IsLanguageAvailableProperties) => {
  if (!options?.languageOnly) options.languageOnly = false

  let newAppLocale = ''

  const isAvailable = appLocales.some(appLocale => {
    // Backwards compatibility for older browsers (Don't return regionless locales unless language only)
    if (
      !isLocaleSupported() &&
      !options.languageOnly &&
      userLocale.split('-')[1] === undefined
    ) {
      return {
        isAvailable: false,
        appLocale
      }
    }

    // Strip the region code from both locales (en-eg -> en)
    const userLanguage = isLocaleSupported()
      ? new Intl.Locale(userLocale).minimize().language
      : userLocale.split('-')[0]
    const appLanguage = isLocaleSupported()
      ? new Intl.Locale(appLocale).minimize().language
      : appLocale.split('-')[0]

    const isAvailable = userLanguage === appLanguage

    // Update the locale field to the canonical region if there is no translations for the user region
    // For example, en-XX (unknown region) to en-US (canonical region)
    if (isAvailable) newAppLocale = appLocale

    return isAvailable
  })

  return { isAvailable, appLocale: newAppLocale }
}
