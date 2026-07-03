# HighlightApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllHighlights**](#getallhighlights) | **GET** /rest/v1/highlights | |
|[**getHighlightsInCollection**](#gethighlightsincollection) | **GET** /rest/v1/highlights/{collectionId} | |
|[**getRaindrop**](#getraindrop) | **GET** /rest/v1/raindrop/{id} | |
|[**updateRaindrop**](#updateraindrop) | **PUT** /rest/v1/raindrop/{id} | |

# **getAllHighlights**
> GetAllHighlightsResponse getAllHighlights()


### Example

```typescript
import {
    HighlightApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HighlightApi(configuration);

let page: number; // (optional) (default to undefined)
let perpage: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getAllHighlights(
    page,
    perpage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **perpage** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetAllHighlightsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getHighlightsInCollection**
> GetHighlightsInCollectionResponse getHighlightsInCollection()


### Example

```typescript
import {
    HighlightApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HighlightApi(configuration);

let collectionId: number; // (default to undefined)
let page: number; // (optional) (default to undefined)
let perpage: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getHighlightsInCollection(
    collectionId,
    page,
    perpage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **perpage** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetHighlightsInCollectionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRaindrop**
> GetRaindropResponse getRaindrop()


### Example

```typescript
import {
    HighlightApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HighlightApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getRaindrop(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GetRaindropResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateRaindrop**
> UpdateRaindropResponse updateRaindrop()


### Example

```typescript
import {
    HighlightApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new HighlightApi(configuration);

let id: number; // (default to undefined)
let body: object; // (optional)

const { status, data } = await apiInstance.updateRaindrop(
    id,
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**UpdateRaindropResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

