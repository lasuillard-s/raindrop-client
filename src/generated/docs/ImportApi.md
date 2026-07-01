# ImportApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**checkURLsExist**](#checkurlsexist) | **POST** /rest/v1/import/url/exists | |
|[**importHTMLBookmarkFile**](#importhtmlbookmarkfile) | **POST** /rest/v1/import/file | |
|[**parseURL**](#parseurl) | **GET** /rest/v1/import/url/parse | |

# **checkURLsExist**
> CheckURLsExistResponse checkURLsExist()


### Example

```typescript
import {
    ImportApi,
    Configuration,
    CheckURLsExistRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

let checkURLsExistRequest: CheckURLsExistRequest; // (optional)

const { status, data } = await apiInstance.checkURLsExist(
    checkURLsExistRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkURLsExistRequest** | **CheckURLsExistRequest**|  | |


### Return type

**CheckURLsExistResponse**

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

# **importHTMLBookmarkFile**
> ImportHTMLBookmarkFileResponse importHTMLBookmarkFile()


### Example

```typescript
import {
    ImportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

let _import: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.importHTMLBookmarkFile(
    _import
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **_import** | [**File**] |  | (optional) defaults to undefined|


### Return type

**ImportHTMLBookmarkFileResponse**

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

# **parseURL**
> ParseURLResponse parseURL()


### Example

```typescript
import {
    ImportApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ImportApi(configuration);

let url: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.parseURL(
    url
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **url** | [**string**] |  | (optional) defaults to undefined|


### Return type

**ParseURLResponse**

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

