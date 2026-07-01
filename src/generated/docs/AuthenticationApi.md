# AuthenticationApi

All URIs are relative to *https://api.raindrop.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authorize**](#authorize) | **GET** /v1/oauth/authorize | |
|[**getOrRefreshToken**](#getorrefreshtoken) | **POST** /v1/oauth/access_token | |

# **authorize**
> authorize()


### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let redirectUri: string; // (default to undefined)
let clientId: string; // (default to undefined)

const { status, data } = await apiInstance.authorize(
    redirectUri,
    clientId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **redirectUri** | [**string**] |  | defaults to undefined|
| **clientId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**307** | Redirect to Raindrop authorization page |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrRefreshToken**
> GetOrRefreshToken200Response getOrRefreshToken()


### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    GetOrRefreshTokenRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let getOrRefreshTokenRequest: GetOrRefreshTokenRequest; // (optional)

const { status, data } = await apiInstance.getOrRefreshToken(
    getOrRefreshTokenRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getOrRefreshTokenRequest** | **GetOrRefreshTokenRequest**|  | |


### Return type

**GetOrRefreshToken200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

