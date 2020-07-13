global.beforeEach(() => {
  jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => ({
    resolvedOptions: () => ({ locale: 'ja-JP' })
  }))
})
