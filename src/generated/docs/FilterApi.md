# FilterApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getFilters**](#getfilters) | **GET** /rest/v1/filters/{collectionId} | |

# **getFilters**
> GetFiltersResponse getFilters()


### Example

```typescript
import {
    FilterApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new FilterApi(configuration);

let collectionId: number; // (default to undefined)
let tagsSort: '-count' | '_id'; // (optional) (default to undefined)
let search: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.getFilters(
    collectionId,
    tagsSort,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionId** | [**number**] |  | defaults to undefined|
| **tagsSort** | [**&#39;-count&#39; | &#39;_id&#39;**]**Array<&#39;-count&#39; &#124; &#39;_id&#39;>** |  | (optional) defaults to undefined|
| **search** | [**string**] |  | (optional) defaults to undefined|


### Return type

**GetFiltersResponse**

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

