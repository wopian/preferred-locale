import { isLocaleSupported } from '../'

/**
 * @name isLanguageAvailable
 * @param {string} userLocale Unified browser locale being tested for availability
 * @param {string[]} translatedLocales Translations provided by the application
 * @param {number} index The index of the unified browser locale in `array`
 * @param {Object[]} array The unified browser locale array
 * @param {Object} [options={}] Configuration options
 * @param {boolean} [options.languageOnly=false] If true, returns `en` instead of `en-US` or `en-us`
 * @returns {boolean} Is the language available?
 * @private
 */
export const isLanguageAvailable = (
  userLocale,
  translatedLocales,
  index,
  array,
  options = {}
) => {
  if (!options.languageOnly) options.languageOnly = false

  return translatedLocales.filter(translatedLocale => {
    const localeSupported = isLocaleSupported()
    // Backwards compatibility for older browsers (Don't return regionless locales unless language only)
    if (!localeSupported && !options.languageOnly && userLocale.split('-')[1] === undefined) return false

    // Strip the region code from both locales (en-gb -> en)
    const translatedLanguage = localeSupported
      ? new Intl.Locale(translatedLocale).minimize().language
      : translatedLocale.split('-')[0]
    const browserLanguage = localeSupported
      ? new Intl.Locale(userLocale).minimize().language
      : userLocale.split('-')[0]

    const isLanguageAvailable = translatedLanguage === browserLanguage

    // Update the locale field to the canonical region if there is no translations for the browser-provided region
    // For example, en-XX (unknown region) to en-US (translated)
    if (isLanguageAvailable) array[index].locale = translatedLocale

    return isLanguageAvailable
  }).length > 0
}
