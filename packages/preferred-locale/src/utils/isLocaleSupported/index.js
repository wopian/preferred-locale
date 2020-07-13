/**
 * Checks if Intl.Locale is present and compliant to the specification.
 *
 * Safari 14 Dev 1 & 2 implemented the min/max functions as returning strings instead of a Locale object.
 *
 * @name isLocaleSupported
 * @param {string} [fallback='en-US'] Base language of the application
 * @returns {boolean} Is Intl.Locale supported?
 * @private
 * @example
 * isLocaleSupported('en-us') // true or false
 */
export const isLocaleSupported = (fallback = 'en-US') => {
  if (!Intl) return false
  if (!('Locale' in Intl)) return false
  const locale = new Intl.Locale(fallback)
  return (
    typeof locale.maximize().baseName === 'string' &&
    typeof locale.minimize().baseName === 'string'
  )
}
