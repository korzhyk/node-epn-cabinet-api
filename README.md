# ePN Cabinet API

Node implementation of official PHP SKD for ePN Cabinet API.

### Installation

    yarn add epn-cabinet-api

### Usage
```js
const EPNApi = require('epn-cabinet-api')

const api = new EPNApi(EPN_API_KEY, EPN_API_SECRET)

api.getCreatives()
    .exec()
    .then(([ creatives ]) => console.log('Success:', creatives))
    .catch(e => console.log('Error:', e))
```
### JSDoc
<a name="EPNApi"></a>

## Reference
Class provide API calls to ePN Cabinet

**Kind**: global class

* [EPNApi](#EPNApi)
    * [new EPNApi(api_key, secret_key)](#new_EPNApi_new)
    * [.checkLink(link)](#EPNApi+checkLink) ↩︎
    * [.getTransactions(params)](#EPNApi+getTransactions) ↩︎
    * [.getCreatives(params)](#EPNApi+getCreatives) ↩︎
    * [.getStatistics(type, params)](#EPNApi+getStatistics) ↩︎
    * [.clear()](#EPNApi+clear) ↩︎
    * [.exec()](#EPNApi+exec) ⇒ <code>Promise</code>

<a name="new_EPNApi_new"></a>

### new EPNApi(api_key, secret_key)

| Param | Type | Description |
| --- | --- | --- |
| api_key | <code>String</code> | API key |
| secret_key | <code>String</code> | Secret key |

<a name="EPNApi+checkLink"></a>

### epnApi.checkLink(link) ↩︎
Check if link valid

**Kind**: instance method of [<code>EPNApi</code>](#EPNApi)
**Chainable**

| Param | Type | Description |
| --- | --- | --- |
| link | <code>String</code> | url to check |

<a name="EPNApi+getTransactions"></a>

### epnApi.getTransactions(params) ↩︎
Get transaction

**Kind**: instance method of [<code>EPNApi</code>](#EPNApi)
**Chainable**

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Request params |

<a name="EPNApi+getCreatives"></a>

### epnApi.getCreatives(params) ↩︎
Get creatives

**Kind**: instance method of [<code>EPNApi</code>](#EPNApi)
**Chainable**

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | Request params |

<a name="EPNApi+getStatistics"></a>

### epnApi.getStatistics(type, params) ↩︎
Get statistics

**Kind**: instance method of [<code>EPNApi</code>](#EPNApi)
**Chainable**

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | Type of statistics |
| params | <code>Object</code> | Request params |

<a name="EPNApi+clear"></a>

### epnApi.clear() ↩︎
Clear all pendings requests

**Kind**: instance method of [<code>EPNApi</code>](#EPNApi)
**Chainable**
<a name="EPNApi+exec"></a>

### epnApi.exec() ⇒ <code>Promise</code>
Fetch all pendings requests

**Kind**: instance method of [<code>EPNApi</code>](#EPNApi)
