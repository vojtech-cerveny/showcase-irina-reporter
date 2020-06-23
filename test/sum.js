describe('unittests', () => {
  before(()=>{
    browser.url('/')
  })
  it('1+1', () => {
    expect(1+1 === 2).toBeTruthy()
  });

  it('1+2', () => {
    expect(1+2 === 3).toBeTruthy()
  })

  it('1+1', () => {
    expect(1+1 === 2).toBeTruthy()
  });

  it('1+3', () => {
    expect(1+2 === 3).toBeTruthy()
  })

  it('1+4', () => {
    expect(1+1 === 2).toBeTruthy()
  });

  it('1+5', () => {
    expect(1+2 === 3).toBeTruthy()
  })

  it('1+6', () => {
    expect(1+1 === 2).toBeTruthy()
  });

  it('1+7', () => {
    expect(1+2 === 4).toBeTruthy()
  })
  describe('bla bla ', () => {
    it('1+7', () => {
      expect(1+2 === 3).toBeTruthy()
    })
  });
});
