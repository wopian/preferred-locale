import { availableLocales, mergeUserLocales, userLocales } from './index.js'

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
  if (!options.regionLowerCase) options.regionLowerCase = true
  if (!options.languageOnly) options.languageOnly = false

  const matchedLocales = availableLocales({
    userLocales: mergeUserLocales([...userLocales(), fallback], options),
    appLocales,
    options
  })

  console.log(matchedLocales)

  return matchedLocales[0] || fallback
}
