import { PreferredLocaleOptions } from './index.js'

export interface MergedUserLocale {
  locale: string
  priority: number
}

export const mergeUserLocales = (
  locales: string[],
  options: PreferredLocaleOptions = {}
): MergedUserLocale[] => {
  if (!options?.regionLowerCase) options.regionLowerCase = true
  if (!options?.languageOnly) options.languageOnly = false

  const prioritisedLocales = locales.map((locale, priority) => {
    if (options.languageOnly) {
      return {
        locale: locale.split('-')[0],
        priority
      }
    }

    const maximised = new Intl.Locale(locale).maximize()

    if (options.regionLowerCase && maximised.region) {
      return {
        locale: `${maximised.language}-${maximised.region.toLowerCase()}`,
        priority
      }
    }

    return {
      locale: `${maximised.language}-${maximised.region}`,
      priority
    }
  })
  return prioritisedLocales.filter(
    (locale, index) => prioritisedLocales.indexOf(locale) === index
  )
}
