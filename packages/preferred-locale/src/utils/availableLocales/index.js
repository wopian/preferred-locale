import { isLanguageAvailable } from '../'

/**
 * @name availableLocales
 * @param {Object[]} userLocales Unified browser locales
 * @param {string[]} translatedLocales Translations provided by the application
 * @param {Object} [options={}] Configuration options
 * @param {boolean} [options.regionLowerCase=false] If true, returns `en-us` instead of `en-US`
 * @returns {Object[]} Locales supported by both the browser and application
 * @private
 */
export const availableLocales = (
  userLocales,
  translatedLocales,
  options = {}
) => {
  if (!options.regionLowerCase) options.regionLowerCase = false

  return userLocales.filter((userLocale, index, array) => {
    const formattedLocale = options.regionLowerCase
      ? userLocale.locale.toLowerCase()
      : userLocale.locale

    // Escape early if the language and region match exactly
    if (translatedLocales.includes(formattedLocale)) return true

    // Check if we support another regional varient of the language
    return isLanguageAvailable(
      formattedLocale,
      translatedLocales,
      index,
      array
    )
  })
}