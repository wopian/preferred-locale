/**
 * @name userLocales
 * @param {string} fallback Fallback locale added to the user locales
 * @returns {string[]} Array of the user locales
 */
export default fallback => {
  if (global?.navigator?.languages) return navigator.languages.concat([ fallback ])
  if ('DateTimeFormat' in Intl) return [ Intl.DateTimeFormat().resolvedOptions().locale, fallback ]
  return [ fallback ]
}
