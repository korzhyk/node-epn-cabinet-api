const Api = require('.')
const expect = require('expect.js')

const create = (key, secret) => new Api(key, secret)

describe('class', () => {

  it('pass key and secret', () => {
    expect(create('key', 'secret')).to.be.a(Api)
  })

  describe('throw if no credentials povided', () => {
    it('no key', () => {
      expect(create).to.throwException()
    })

    it('no secret', () => {
      expect(create).withArgs('key').to.throwException()
    })
  })
})

describe('requests', () => {
  describe('add', () => {
    const api = create('key', 'secret')
    api.checkLink('https://aliexpress.com/')

    it('should be in requests', () => {
      expect(api.requests).to.have.length(1)
    })

    it('has correct action', () => {
      expect(api.requests[0]).to.have.property('action', 'check_link')
    })
  })

  describe('clear', () => {
    const api = create('key', 'secret')

    it('should be in requests', () => {
      api.checkLink('https://aliexpress.com/')
      api.clear()
      expect(api.requests).to.have.length(0)
    })
  })

  describe('statistics', () => {
    const api = create('key', 'secret')

    describe('has correct action', () => {
      it('when called without type', () => {
        api.getStatistics()
        expect(api.requests[0]).to.have.property('action', 'get_statistics_by_day')
      })

      it('when called with type "Hour"', () => {
        api.clear().getStatistics('Hour')
        expect(api.requests[0]).to.have.property('action', 'get_statistics_by_hour')
      })
    })

    it('throw if no available type', () => {
      expect(() => api.getStatistics('Hours')).to.throwException()
    })
  })

  describe('exec', () => {
    const api = create('key', 'secret')
    it('returns promise', () => {
      expect(api.exec()).to.be.a(Promise)
    })

    describe('when no pending requests', () => {
      it('returns empty array', done => {
        api.exec().then(result => {
          expect(result).to.have.length(0)
          done()
        })
      })
    })
  })
})
