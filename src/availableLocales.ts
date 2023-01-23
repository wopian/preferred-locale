import { MergedUserLocale } from './index.js'

export const availableLocales = (
  locales: string[],
  unifiedLocales: MergedUserLocale[]
) => unifiedLocales.filter(locale => locales.includes(locale.locale))
