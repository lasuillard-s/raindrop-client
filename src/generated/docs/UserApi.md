# UserApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**connectSocialNetworkProvider**](#connectsocialnetworkprovider) | **GET** /rest/v1/user/connect/{provider} | |
|[**disconnectSocialNetworkProvider**](#disconnectsocialnetworkprovider) | **GET** /rest/v1/user/connect/{provider}/revoke | |
|[**getCurrentUser**](#getcurrentuser) | **GET** /rest/v1/user | |
|[**getPublicUserByName**](#getpublicuserbyname) | **GET** /rest/v1/user/{name} | |
|[**getSystemCollectionStats**](#getsystemcollectionstats) | **GET** /rest/v1/user/stats | |
|[**updateCurrentUser**](#updatecurrentuser) | **PUT** /rest/v1/user | |

# **connectSocialNetworkProvider**
> connectSocialNetworkProvider()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive'; // (default to undefined)

const { status, data } = await apiInstance.connectSocialNetworkProvider(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;facebook&#39; | &#39;google&#39; | &#39;twitter&#39; | &#39;vkontate&#39; | &#39;dropbox&#39; | &#39;gdrive&#39;**]**Array<&#39;facebook&#39; &#124; &#39;google&#39; &#124; &#39;twitter&#39; &#124; &#39;vkontate&#39; &#124; &#39;dropbox&#39; &#124; &#39;gdrive&#39;>** |  | defaults to undefined|


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
|**307** | Redirect |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disconnectSocialNetworkProvider**
> disconnectSocialNetworkProvider()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let provider: 'facebook' | 'google' | 'twitter' | 'vkontate' | 'dropbox' | 'gdrive'; // (default to undefined)

const { status, data } = await apiInstance.disconnectSocialNetworkProvider(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**&#39;facebook&#39; | &#39;google&#39; | &#39;twitter&#39; | &#39;vkontate&#39; | &#39;dropbox&#39; | &#39;gdrive&#39;**]**Array<&#39;facebook&#39; &#124; &#39;google&#39; &#124; &#39;twitter&#39; &#124; &#39;vkontate&#39; &#124; &#39;dropbox&#39; &#124; &#39;gdrive&#39;>** |  | defaults to undefined|


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

# **getCurrentUser**
> GetCurrentUserResponse getCurrentUser()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

const { status, data } = await apiInstance.getCurrentUser();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**GetCurrentUserResponse**

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

# **getPublicUserByName**
> GetPublicUserByNameResponse getPublicUserByName()


### Example

```typescript
import {
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let name: number; // (default to undefined)

const { status, data } = await apiInstance.getPublicUserByName(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**number**] |  | defaults to undefined|


### Return type

**GetPublicUserByNameResponse**

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
    UserApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

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

# **updateCurrentUser**
> UpdateCurrentUserResponse updateCurrentUser()


### Example

```typescript
import {
    UserApi,
    Configuration,
    UpdateCurrentUserRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UserApi(configuration);

let updateCurrentUserRequest: UpdateCurrentUserRequest; // (optional)

const { status, data } = await apiInstance.updateCurrentUser(
    updateCurrentUserRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCurrentUserRequest** | **UpdateCurrentUserRequest**|  | |


### Return type

**UpdateCurrentUserResponse**

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

