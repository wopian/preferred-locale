import { isLocaleSupported } from '../'

/**
 * @name isLanguageAvailable
 * @param {string} userLocale Unified browser locale being tested for availability
 * @param {string[]} translatedLocales Translations provided by the application
 * @param {number} index The index of the unified browser locale in `array`
 * @param {Object[]} array The unified browser locale array
 * @returns {boolean} Is the language available?
 * @private
 */
export const isLanguageAvailable = (
  userLocale,
  translatedLocales,
  index,
  array
) => translatedLocales.filter(translatedLocale => {
  // Strip the region code from both locales (en-gb -> en)
  const translatedLanguage = isLocaleSupported()
    ? new Intl.Locale(translatedLocale).minimize().language
    : translatedLocale.split('-')[0]
  const browserLanguage = isLocaleSupported()
    ? new Intl.Locale(userLocale).minimize().language
    : userLocale.split('-')[0]

  const isLanguageAvailable = translatedLanguage === browserLanguage

  // Update the locale field to the canonical region if there is no translations for the browser-provided region
  // For example, en-XX (unknown region) to en-US (translated)
  if (isLanguageAvailable) array[index].locale = translatedLanguage

  return isLanguageAvailable
}).length > 0
