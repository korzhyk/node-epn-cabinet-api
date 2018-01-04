'use strict'

const { createHash } = require('crypto')
const assert = require('assert')
const request = require('request')

const API_URL = 'http://api.epn.bz/cabinet'
const API_VERSION = 1
const API_TIMEOUT = 60000
const API_KEY = Symbol('api_key')
const SECRET_KEY = Symbol('secret_key')

/**
 * Avaliable types of stats, default is "day"
 * @type {Array}
 */
const AVAILABLE_STATS = [
  'day',
  'sub',
  'hour',
  'creative'
]

/**
 * Class provide API calls to ePN Cabinet
 */
class EPNApi {
  /**
   * @param {String} api_key API key
   * @param {String} secret_key Secret key
   */
  constructor (api_key, secret_key) {
    assert(api_key, 'ePN API key is required!')
    assert(secret_key, 'ePN SECRET key is required!')

    this[API_KEY] = api_key
    this[SECRET_KEY] = secret_key

    this.requests = []
  }

  /**
   * Add request to queue
   * @private
   * @chainable
   * @param {Object} request request object
   */
  addRequest (request) {
    this.requests.push(request)
    return this
  }

  /**
   * Check if link valid
   * @chainable
   * @param {String} link url to check
   */
  checkLink (link) {
    return this.addRequest({
      link: link.replace(/(\/)/g, '\$1'),
      action: 'check_link'
    })
  }

  /**
   * Get transaction
   * @chainable
   * @param {Object} params Request params
   */
  getTransactions (params={}) {
    return this.addRequest(
      Object.assign({
        click_id: '',
        date_from: '',
        date_to: '',
        date_type: '',
        order_status: '',
        additional_fields: '',
        offer_type: 'aliexpress',
        page: 1,
        per_page: 300
      },
      params,
      { action: 'get_transactions' })
    )
  }

  /**
   * Get creatives
   * @chainable
   * @param {Object} params Request params
   */
  getCreatives (params={}) {
    return this.addRequest(
      Object.assign({
        page: 1,
        per_page: 50
      },
      params,
      { action: 'get_creatives' })
    )
  }

  /**
   * Get statistics
   * @chainable
   * @param {String} type Type of statistics
   * @param {Object} params Request params
   */
  getStatistics (by='day', params={}) {
    if (by.constructor === String) {
      by = by.toLowerCase()
      assert(
        ~AVAILABLE_STATS.indexOf(by),
        `Wrong statistics type: "${by}",
        available types is: ${AVAILABLE_STATS}`)
    } else {
      params = by
      by = AVAILABLE_STATS[0] // Set to default "day"
    }

    return this.addRequest(
      Object.assign({
        creative_id: 0,
        date_from: '',
        date_to: '',
        offer_type: '',
        currency: 'USD',
        page: 1,
        per_page: 50
      },
      params,
      { action: `get_statistics_by_${by}` })
    )
  }

  /**
   * Sign request body
   * @private
   * @param  {String} string String to sign
   * @return {String} sign Signed string
   */
  sign (body) {
    return createHash('md5')
      .update(this[SECRET_KEY] + body)
      .digest('hex')
  }

  /**
   * Clear all pendings requests
   * @chainable
   */
  clear () {
    this.requests = []
    return this
  }

  /**
   * Fetch all pendings requests
   * @return {Promise}
   */
  exec () {
    if (this.requests.length < 1) {
      return Promise.resolve([])
    }

    const body = JSON.stringify({
      user_api_key: this[API_KEY],
      api_version: API_VERSION,
      requests: this.requests
    })

    this.clear()

    return new Promise((resolve, reject) => {
      request.post({
        url: API_URL,
        timeout: API_TIMEOUT,
        headers: {
          'Content-Type': 'text/plain',
          'X-EPN-Digest-Sign': this.sign(body),
        },
        body
      }, (err, httpResponse, response) => {
        if (err) return reject(err)
        try {
          const { error, results } = JSON.parse(response)
          if (error) {
            reject(error)
          } else {
            resolve(Array.isArray(results) ? results : [])
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

module.exports = exports = EPNApi
exports.AVAILABLE_STATS = AVAILABLE_STATS
