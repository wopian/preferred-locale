import { userLocales, mergeUserLocales, availableLocales } from './index.js'

export interface PreferredLocaleOptions {
  regionLowerCase?: boolean
  languageOnly?: boolean
}

export interface PreferredLocaleProperties {
  fallback: string
  locales: string[]
  options?: PreferredLocaleOptions
}

export const preferredLocale = ({
  fallback,
  locales,
  options = {},
}: PreferredLocaleProperties) => {
  if (!options.regionLowerCase) options.regionLowerCase = true
  if (!options.languageOnly) options.languageOnly = false

  const unifiedLocales = mergeUserLocales([...userLocales(), fallback])
  const availableLocale = availableLocales(locales, unifiedLocales)[0]

  return availableLocale.locale || fallback
}
