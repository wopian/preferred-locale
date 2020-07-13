import unifyUserLocales from './unifyUserLocales'
import availableLocales from './availableLocales'
import userLocales from './userLocales'

/**
 * @name preferredLocale
 * @param {string[]} translatedLocales Translations provided by the application
 * @param {string} fallback Source locale of the application. Used when no browser locale matches translatedLocales
 * @param {Object} [options={}] Configuration options
 * @param {boolean} [options.regionLowerCase=false] If true, returns `en-us` instead of `en-US`
 * @param {boolean} [options.languageOnly=false] If true, returns `en` instead of `en-US` or `en-us`
 * @returns {string} Preferred locale
 */
export default (translatedLocales, fallback, options = {}) => {
  if (!options.regionLowerCase) options.regionLowerCase = false
  if (!options.languageOnly) options.languageOnly = false

  const unified = unifyUserLocales(userLocales(fallback), options)
  const available = availableLocales(unified, translatedLocales, options)

  return available[0].locale || fallback
}
