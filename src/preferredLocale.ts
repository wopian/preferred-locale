import { availableLocales, getUserLocales, mergeUserLocales } from './index.js'

export interface PreferredLocaleOptions {
  regionLowerCase?: boolean
  languageOnly?: boolean
}

export interface PreferredLocaleProperties {
  fallback: string
  appLocales: string[]
  options?: PreferredLocaleOptions
}

export const preferredLocale = ({
  fallback,
  appLocales,
  options = {}
}: PreferredLocaleProperties) => {
  if (!options.regionLowerCase) options.regionLowerCase = false
  if (!options.languageOnly) options.languageOnly = false

  const userLocales = getUserLocales(options)
  const mergedUserLocales = mergeUserLocales(
    [...userLocales, fallback],
    options
  )
  const matchedLocales = availableLocales({
    userLocales: mergedUserLocales,
    appLocales,
    options
  })

  return matchedLocales[0] || fallback
}
