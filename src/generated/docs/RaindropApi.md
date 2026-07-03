# RaindropApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRaindrop**](#createraindrop) | **POST** /rest/v1/raindrop | |
|[**createRaindrops**](#createraindrops) | **POST** /rest/v1/raindrops | |
|[**getPermanentCopy**](#getpermanentcopy) | **GET** /rest/v1/raindrop/{id}/cache | |
|[**getRaindrop**](#getraindrop) | **GET** /rest/v1/raindrop/{id} | |
|[**getRaindrops**](#getraindrops) | **GET** /rest/v1/raindrops/{collectionId} | |
|[**removeRaindrop**](#removeraindrop) | **DELETE** /rest/v1/raindrop/{id} | |
|[**removeRaindrops**](#removeraindrops) | **DELETE** /rest/v1/raindrops/{collectionId} | |
|[**suggestForExistingBookmark**](#suggestforexistingbookmark) | **GET** /rest/v1/raindrop/{id}/suggest | |
|[**suggestForNewBookmark**](#suggestfornewbookmark) | **POST** /rest/v1/raindrop/suggest | |
|[**updateRaindrop**](#updateraindrop) | **PUT** /rest/v1/raindrop/{id} | |
|[**updateRaindrops**](#updateraindrops) | **PUT** /rest/v1/raindrops/{collectionId} | |
|[**uploadFile**](#uploadfile) | **PUT** /rest/v1/raindrop/file | |
|[**uploadRaindropCover**](#uploadraindropcover) | **PUT** /rest/v1/raindrop/{id}/cover | |

# **createRaindrop**
> CreateRaindropResponse createRaindrop()


### Example

```typescript
import {
    RaindropApi,
    Configuration,
    CreateRaindropRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let createRaindropRequest: CreateRaindropRequest; // (optional)

const { status, data } = await apiInstance.createRaindrop(
    createRaindropRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRaindropRequest** | **CreateRaindropRequest**|  | |


### Return type

**CreateRaindropResponse**

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

# **createRaindrops**
> CreateRaindropsResponse createRaindrops()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let body: object; // (optional)

const { status, data } = await apiInstance.createRaindrops(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

**CreateRaindropsResponse**

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

# **getPermanentCopy**
> getPermanentCopy()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getPermanentCopy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**307** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRaindrop**
> GetRaindropResponse getRaindrop()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

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

# **getRaindrops**
> GetRaindropsResponse getRaindrops()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let collectionId: number; // (default to undefined)
let sort: string; // (optional) (default to undefined)
let perpage: number; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getRaindrops(
    collectionId,
    sort,
    perpage,
    page,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionId** | [**number**] |  | defaults to undefined|
| **sort** | [**string**] |  | (optional) defaults to undefined|
| **perpage** | [**number**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetRaindropsResponse**

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

# **removeRaindrop**
> RemoveRaindropResponse removeRaindrop()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.removeRaindrop(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**RemoveRaindropResponse**

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

# **removeRaindrops**
> RemoveRaindropsResponse removeRaindrops()


### Example

```typescript
import {
    RaindropApi,
    Configuration,
    RemoveRaindropsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let collectionId: number; // (default to undefined)
let search: string; // (optional) (default to undefined)
let removeRaindropsRequest: RemoveRaindropsRequest; // (optional)

const { status, data } = await apiInstance.removeRaindrops(
    collectionId,
    search,
    removeRaindropsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeRaindropsRequest** | **RemoveRaindropsRequest**|  | |
| **collectionId** | [**number**] |  | defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**RemoveRaindropsResponse**

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

# **suggestForExistingBookmark**
> SuggestForExistingBookmarkResponse suggestForExistingBookmark()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.suggestForExistingBookmark(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**SuggestForExistingBookmarkResponse**

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

# **suggestForNewBookmark**
> SuggestForNewBookmarkResponse suggestForNewBookmark()


### Example

```typescript
import {
    RaindropApi,
    Configuration,
    SuggestForNewBookmarkRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let suggestForNewBookmarkRequest: SuggestForNewBookmarkRequest; // (optional)

const { status, data } = await apiInstance.suggestForNewBookmark(
    suggestForNewBookmarkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **suggestForNewBookmarkRequest** | **SuggestForNewBookmarkRequest**|  | |


### Return type

**SuggestForNewBookmarkResponse**

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

# **updateRaindrop**
> UpdateRaindropResponse updateRaindrop()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

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

# **updateRaindrops**
> UpdateRaindropsResponse updateRaindrops()


### Example

```typescript
import {
    RaindropApi,
    Configuration,
    UpdateRaindropsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let collectionId: number; // (default to undefined)
let updateRaindropsRequest: UpdateRaindropsRequest; // (optional)

const { status, data } = await apiInstance.updateRaindrops(
    collectionId,
    updateRaindropsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRaindropsRequest** | **UpdateRaindropsRequest**|  | |
| **collectionId** | [**number**] |  | defaults to undefined|


### Return type

**UpdateRaindropsResponse**

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

# **uploadFile**
> UploadFileResponse uploadFile()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let file: File; // (optional) (default to undefined)
let collectionId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadFile(
    file,
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **file** | [**File**] |  | (optional) defaults to undefined|
| **collectionId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UploadFileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadRaindropCover**
> UploadRaindropCoverResponse uploadRaindropCover()


### Example

```typescript
import {
    RaindropApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RaindropApi(configuration);

let id: number; // (default to undefined)
let cover: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadRaindropCover(
    id,
    cover
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|
| **cover** | [**File**] |  | (optional) defaults to undefined|


### Return type

**UploadRaindropCoverResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

