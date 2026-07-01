# TagApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTagsInCollection**](#gettagsincollection) | **GET** /rest/v1/tags/{collectionId} | |
|[**removeTagsFromCollection**](#removetagsfromcollection) | **DELETE** /rest/v1/tags/{collectionId} | |
|[**renameOrMergeTags**](#renameormergetags) | **PUT** /rest/v1/tags/{collectionId} | |

# **getTagsInCollection**
> GetTagsInCollectionResponse getTagsInCollection()


### Example

```typescript
import {
    TagApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let collectionId: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getTagsInCollection(
    collectionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **collectionId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**GetTagsInCollectionResponse**

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

# **removeTagsFromCollection**
> SimpleResponse removeTagsFromCollection()


### Example

```typescript
import {
    TagApi,
    Configuration,
    RemoveTagsFromCollectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let collectionId: number; // (optional) (default to undefined)
let removeTagsFromCollectionRequest: RemoveTagsFromCollectionRequest; // (optional)

const { status, data } = await apiInstance.removeTagsFromCollection(
    collectionId,
    removeTagsFromCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeTagsFromCollectionRequest** | **RemoveTagsFromCollectionRequest**|  | |
| **collectionId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**SimpleResponse**

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

# **renameOrMergeTags**
> SimpleResponse renameOrMergeTags()


### Example

```typescript
import {
    TagApi,
    Configuration,
    RenameOrMergeTagsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new TagApi(configuration);

let collectionId: number; // (optional) (default to undefined)
let renameOrMergeTagsRequest: RenameOrMergeTagsRequest; // (optional)

const { status, data } = await apiInstance.renameOrMergeTags(
    collectionId,
    renameOrMergeTagsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renameOrMergeTagsRequest** | **RenameOrMergeTagsRequest**|  | |
| **collectionId** | [**number**] |  | (optional) defaults to undefined|


### Return type

**SimpleResponse**

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

