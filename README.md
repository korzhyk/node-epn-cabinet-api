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

[API reference](API.md)
