/**
 * @name userLocales
 * @param {string} fallback Fallback locale added to the user locales
 * @returns {string[]} Array of the user locales
 * @private
 */
export const userLocales = fallback => {
  if (typeof window === 'object' && window?.navigator?.languages) return window.navigator.languages.concat([ fallback ])
  if (Intl && 'DateTimeFormat' in Intl) return [ Intl.DateTimeFormat().resolvedOptions().locale, fallback ]
  return [ fallback ]
}
