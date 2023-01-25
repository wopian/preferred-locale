import { availableLocales, getUserLocales, mergeUserLocales } from './index.js'

/**
 * Options for Preferred Locale
 */
export interface PreferredLocaleOptions {
  /** Whether to return the region portion of the locale lowercased. Defaults to `false` */
  regionLowerCase?: boolean
  /** Whether to return only the language portion of the locale. Defaults to `false` */
  languageOnly?: boolean
}

/**
 * Get the user's preferred locale from the environment
 *
 * @param fallback The default locale to use when no locales are matched to the user's environment. This should be one of the `appLocales` array values
 * @param appLocales An array of locales supported by the app
 * @param [options] Options for the function
 * @returns The user's preferred locale
 * @example
 * import { preferredLocale } from 'preferred-locale'
 *
 * preferredLocale('en-US', ['en-US', 'fr-FR', 'de-DE', 'az-Cyrl-AZ']) // 'en-US'
 *
 * preferredLocale('en-US', ['en-US', 'fr-FR', 'de-DE', 'az-Cyrl-AZ'], {
 *   regionLowerCase: true
 * }) // 'en-us'
 *
 * preferredLocale('en', ['en', 'fr', 'de', 'az'], {
 *   languageOnly: true
 * }) // 'en'
 **/
export const preferredLocale = (
  fallback: string,
  appLocales: string[],
  options: PreferredLocaleOptions = {}
) => {
  if (!options.regionLowerCase) options.regionLowerCase = false
  if (!options.languageOnly) options.languageOnly = false

  const userLocales = getUserLocales(options)
  const mergedUserLocales = mergeUserLocales(
    [...userLocales, fallback],
    options
  )
  const matchedLocales = availableLocales(
    mergedUserLocales,
    appLocales,
    options
  )

  return matchedLocales[0] || fallback
}
