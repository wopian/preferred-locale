import { PreferredLocaleOptions } from './preferredLocale.js'

/**
 * Get the user's locales from the environment
 *
 * @param [options] - Options for the function
 * @returns An array of locales in order of preference
 * @example
 * import { getUserLocales } from 'preferred-locale'
 *
 * getUserLocales() // ['en-US', 'en']
 *
 * getUserLocales({ regionLowerCase: true }) // ['en-us', 'en']
 */
export const getUserLocales = (
  options: PreferredLocaleOptions = {}
): string[] => {
  if (!options?.regionLowerCase) options.regionLowerCase = false

  let locales: string[] = []

  if (Intl && 'DateTimeFormat' in Intl) {
    locales = [Intl.DateTimeFormat().resolvedOptions().locale]
  } else if (typeof window === 'object' && window?.navigator?.languages) {
    locales = [...window.navigator.languages]
  }

  return locales.map(locale => {
    if (options.regionLowerCase) return locale.toLowerCase()
    return locale
  })
}
