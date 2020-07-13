import { deduplicate, isLocaleSupported } from '../'

/**
 * @name unifyUserLocales
 * @param {string[]} userLocales Locales provided by the browser or system
 * @param {Object} [options={}] Configuration options
 * @param {boolean} [options.regionLowerCase=false] If true, returns `en-us` instead of `en-US`
 * @param {boolean} [options.languageOnly=false] If true, returns `en` instead of `en-US` or `en-us`
 * @returns {Object[]} Unified browser locales
 * @private
 * @example <caption>Unify locales</caption>
 * unifyUserLocales(['en-GB', 'en', 'en-US'])
 * // [ { locale: 'en-GB', priority: 0 }, { locale: 'en-US', priority: 1 } ]
 * @example <caption>Unify locales (region lower case)</caption>
 * unifyUserLocales(['en-GB', 'en', 'en-US'], { regionLowerCase: true })
 * // [ { locale: 'en-gb', priority: 0 }, { locale: 'en-us', priority: 1 } ]
 * @example <caption>Unify locales (language only)</caption>
 * unifyUserLocales(['en-GB', 'en', 'en-US'], { languageOnly: true })
 * // [ { locale: 'en', priority: 0 } ]
 */
export const unifyUserLocales = (userLocales, options = {}) => {
  if (!options.regionLowerCase) options.regionLowerCase = false
  if (!options.languageOnly) options.languageOnly = false

  return deduplicate(
    userLocales.map((browserLocale, priority) => {
      const unified = isLocaleSupported()
        ? new Intl.Locale(browserLocale).maximize()
        : { language: browserLocale.split('-')[0], region: browserLocale.split('-')[1] }
      const region = (!options.languageOnly && unified.region)
        ? (options.regionLowerCase
          ? unified.region.toLowerCase()
          : unified.region)
        : undefined
      const locale = region
        ? `${unified.language}-${region}`
        : unified.language
      return {
        locale,
        priority
      }
    })
  )
}
