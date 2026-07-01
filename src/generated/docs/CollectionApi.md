# CollectionApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**acceptInvitation**](#acceptinvitation) | **POST** /rest/v1/collection/{id}/join | |
|[**changeCollaboratorAccessLevel**](#changecollaboratoraccesslevel) | **PUT** /rest/v1/collection/{id}/sharing/{userId} | |
|[**createCollection**](#createcollection) | **POST** /rest/v1/collection | |
|[**deleteCollaborator**](#deletecollaborator) | **DELETE** /rest/v1/collection/{id}/sharing/{userId} | |
|[**emptyTrash**](#emptytrash) | **DELETE** /rest/v1/collection/-99 | |
|[**getChildCollections**](#getchildcollections) | **GET** /rest/v1/collections/childrens | |
|[**getCollaborators**](#getcollaborators) | **GET** /rest/v1/collection/{id}/sharing | |
|[**getCollection**](#getcollection) | **GET** /rest/v1/collection/{id} | |
|[**getFeaturedCovers**](#getfeaturedcovers) | **GET** /rest/v1/collections/covers | |
|[**getRootCollections**](#getrootcollections) | **GET** /rest/v1/collections | |
|[**getSystemCollectionStats**](#getsystemcollectionstats) | **GET** /rest/v1/user/stats | |
|[**mergeCollections**](#mergecollections) | **PUT** /rest/v1/collections/merge | |
|[**removeAllEmptyCollections**](#removeallemptycollections) | **PUT** /rest/v1/collections/clean | |
|[**removeCollection**](#removecollection) | **DELETE** /rest/v1/collection/{id} | |
|[**removeCollections**](#removecollections) | **DELETE** /rest/v1/collections | |
|[**reorderAllCollections**](#reorderallcollections) | **PUT** /rest/v1/collections | |
|[**searchCovers**](#searchcovers) | **GET** /rest/v1/collections/covers/{text} | |
|[**shareCollection**](#sharecollection) | **POST** /rest/v1/collection/{id}/sharing | |
|[**unshareOrLeaveCollection**](#unshareorleavecollection) | **DELETE** /rest/v1/collection/{id}/sharing | |
|[**updateCollection**](#updatecollection) | **PUT** /rest/v1/collection/{id} | |
|[**uploadCollectionCover**](#uploadcollectioncover) | **PUT** /rest/v1/collection/{id}/cover | |

# **acceptInvitation**
> AcceptInvitation200Response acceptInvitation()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.acceptInvitation(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**AcceptInvitation200Response**

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

# **changeCollaboratorAccessLevel**
> changeCollaboratorAccessLevel()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    ChangeCollaboratorAccessLevelRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let userId: number; // (default to undefined)
let id: number; // (default to undefined)
let changeCollaboratorAccessLevelRequest: ChangeCollaboratorAccessLevelRequest; // (optional)

const { status, data } = await apiInstance.changeCollaboratorAccessLevel(
    userId,
    id,
    changeCollaboratorAccessLevelRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeCollaboratorAccessLevelRequest** | **ChangeCollaboratorAccessLevelRequest**|  | |
| **userId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCollection**
> CreateCollectionResponse createCollection()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    CreateCollectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let createCollectionRequest: CreateCollectionRequest; // (optional)

const { status, data } = await apiInstance.createCollection(
    createCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCollectionRequest** | **CreateCollectionRequest**|  | |


### Return type

**CreateCollectionResponse**

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

# **deleteCollaborator**
> SimpleResponse deleteCollaborator()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let userId: number; // (default to undefined)
let id: number; // (default to undefined)

const { status, data } = await apiInstance.deleteCollaborator(
    userId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**SimpleResponse**

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

# **emptyTrash**
> SimpleResponse emptyTrash()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

const { status, data } = await apiInstance.emptyTrash();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SimpleResponse**

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

# **getChildCollections**
> GetChildCollectionsResponse getChildCollections()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

const { status, data } = await apiInstance.getChildCollections();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetChildCollectionsResponse**

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

# **getCollaborators**
> getCollaborators()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getCollaborators(
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
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCollection**
> GetCollectionResponse getCollection()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getCollection(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GetCollectionResponse**

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

# **getFeaturedCovers**
> GetFeaturedCoversResponse getFeaturedCovers()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

const { status, data } = await apiInstance.getFeaturedCovers();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetFeaturedCoversResponse**

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

# **getRootCollections**
> GetRootCollectionsResponse getRootCollections()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

const { status, data } = await apiInstance.getRootCollections();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetRootCollectionsResponse**

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

# **getSystemCollectionStats**
> GetSystemCollectionStatsResponse getSystemCollectionStats()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

const { status, data } = await apiInstance.getSystemCollectionStats();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetSystemCollectionStatsResponse**

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

# **mergeCollections**
> MergeCollectionsResponse mergeCollections()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    MergeCollectionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let mergeCollectionsRequest: MergeCollectionsRequest; // (optional)

const { status, data } = await apiInstance.mergeCollections(
    mergeCollectionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **mergeCollectionsRequest** | **MergeCollectionsRequest**|  | |


### Return type

**MergeCollectionsResponse**

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

# **removeAllEmptyCollections**
> RemoveAllEmptyCollectionsResponse removeAllEmptyCollections()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

const { status, data } = await apiInstance.removeAllEmptyCollections();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**RemoveAllEmptyCollectionsResponse**

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

# **removeCollection**
> SimpleResponse removeCollection()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.removeCollection(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**SimpleResponse**

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

# **removeCollections**
> RemoveCollectionsResponse removeCollections()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    RemoveCollectionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let removeCollectionsRequest: RemoveCollectionsRequest; // (optional)

const { status, data } = await apiInstance.removeCollections(
    removeCollectionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **removeCollectionsRequest** | **RemoveCollectionsRequest**|  | |


### Return type

**RemoveCollectionsResponse**

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

# **reorderAllCollections**
> SimpleResponse reorderAllCollections()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    ReorderAllCollectionsRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let reorderAllCollectionsRequest: ReorderAllCollectionsRequest; // (optional)

const { status, data } = await apiInstance.reorderAllCollections(
    reorderAllCollectionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reorderAllCollectionsRequest** | **ReorderAllCollectionsRequest**|  | |


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

# **searchCovers**
> SearchCoversResponse searchCovers()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let text: string; // (default to undefined)

const { status, data } = await apiInstance.searchCovers(
    text
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **text** | [**string**] |  | defaults to undefined|


### Return type

**SearchCoversResponse**

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

# **shareCollection**
> ShareCollectionResponse shareCollection()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    ShareCollectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)
let shareCollectionRequest: ShareCollectionRequest; // (optional)

const { status, data } = await apiInstance.shareCollection(
    id,
    shareCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shareCollectionRequest** | **ShareCollectionRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**ShareCollectionResponse**

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

# **unshareOrLeaveCollection**
> SimpleResponse unshareOrLeaveCollection()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.unshareOrLeaveCollection(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**SimpleResponse**

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

# **updateCollection**
> UpdateCollectionResponse updateCollection()


### Example

```typescript
import {
    CollectionApi,
    Configuration,
    UpdateCollectionRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)
let updateCollectionRequest: UpdateCollectionRequest; // (optional)

const { status, data } = await apiInstance.updateCollection(
    id,
    updateCollectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCollectionRequest** | **UpdateCollectionRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**UpdateCollectionResponse**

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

# **uploadCollectionCover**
> UploadCollectionCoverResponse uploadCollectionCover()


### Example

```typescript
import {
    CollectionApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CollectionApi(configuration);

let id: number; // (default to undefined)
let cover: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadCollectionCover(
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

**UploadCollectionCoverResponse**

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

