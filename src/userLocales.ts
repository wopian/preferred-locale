export type UserLocales = string[]

export const userLocales = (): UserLocales => {
  if (Intl && 'DateTimeFormat' in Intl) return [Intl.DateTimeFormat().resolvedOptions().locale]

  if (typeof window === 'object' && window?.navigator?.languages) return [...window.navigator.languages]

  return []
}
