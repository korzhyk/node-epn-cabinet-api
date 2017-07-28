## Classes

<dl>
<dt><a href="#EPNApi">EPNApi</a></dt>
<dd><p>Class provide API calls to ePN Cabinet</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#AVAILABLE_STATS">AVAILABLE_STATS</a> : <code>Array</code></dt>
<dd><p>Avaliable types of stats</p>
</dd>
</dl>

<a name="EPNApi"></a>

## EPNApi
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
<a name="AVAILABLE_STATS"></a>

## AVAILABLE_STATS : <code>Array</code>
Avaliable types of stats

**Kind**: global constant  
