/**
 * @name isLanguageAvailable
 * @param {string} userLocale Unified browser locale being tested for availability
 * @param {Array[string]} translatedLocales Translations provided by the application
 * @param {number} index The index of the unified browser locale in `array`
 * @param {Array[Object]} array The unified browser locale array
 * @returns {boolean} Is the language available?
 */
export default (
  userLocale,
  translatedLocales,
  index,
  array
) => translatedLocales.filter(translatedLocale => {
  // Strip the region code from both locales (en-gb -> en)
  const translatedLanguage = new Intl.Locale(translatedLocale).minimize().language
  const browserLanguage = new Intl.Locale(userLocale).minimize().language

  const isLanguageAvailable = translatedLanguage === browserLanguage

  // Update the locale field to the canonical region if there is no translations for the browser-provided region
  // For example, en-XX (unknown region) to en-US (translated)
  if (isLanguageAvailable) array[index].locale = translatedLanguage

  return isLanguageAvailable
}).length > 0
