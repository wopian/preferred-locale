global.beforeEach(() => {
  jest.spyOn(navigator, 'languages', 'get').mockReturnValue([ 'ja-JP' ])
})
