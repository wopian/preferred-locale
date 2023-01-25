import { PreferredLocaleOptions } from './preferredLocale.js'

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
