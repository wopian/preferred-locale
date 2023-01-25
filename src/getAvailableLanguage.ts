import { isLocaleSupported, PreferredLocaleOptions } from './index.js'

/**
 * Checks if the user's locale matches the same language with a different region translated by the app
 * @param userLocale The user locale tested against
 * @param appLocales The locales translated by the app
 * @param [options] Options for the function
 * @returns The user's locale if it matches the app's locale, the app's locale if the languages match but region is or false if no matches
 * @example
 * import { getAvailableLanguage } from 'preferred-locale'
 *
 * getAvailableLanguage('en-US', ['en-US', 'en-GB']) // { isAvailable: true, appLocale: 'en-US' }
 *
 * getAvailableLanguage('en-GB', ['en-US']) // { isAvailable: true, appLocale: 'en-US' }
 *
 * getAvailableLanguage('es-ES', ['en-US']) // { isAvailable: false, appLocale: 'en-ES' }
 */
export const getAvailableLanguage = (
  userLocale: string,
  appLocales: string[],
  options: PreferredLocaleOptions = {}
) => {
  if (!options?.languageOnly) options.languageOnly = false

  let newAppLocale = userLocale

  const isAvailable = appLocales.some(appLocale => {
    // Backwards compatibility for older browsers (Don't return regionless locales unless language only)
    if (
      !isLocaleSupported() &&
      !options.languageOnly &&
      userLocale.split('-')[1] === undefined
    ) {
      return false
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
