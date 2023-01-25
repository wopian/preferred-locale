/**
 * Checks if the environment supports the Intl.Locale namespace
 *
 * @returns {boolean} - true if the environment supports the Intl.Locale namespace
 * @example
 * import { isLocaleSupported } from 'preferred-locale'
 *
 * isLocaleSupported() // true or false
 */
export const isLocaleSupported = () => Intl && 'Locale' in Intl
