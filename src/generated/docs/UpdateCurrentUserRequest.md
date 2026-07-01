# UpdateCurrentUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**Array&lt;UpdateCurrentUserRequestGroupsInner&gt;**](UpdateCurrentUserRequestGroupsInner.md) |  | [optional] [default to undefined]
**config** | [**UserConfig**](UserConfig.md) |  | [optional] [default to undefined]
**newpassword** | **string** |  | [optional] [default to undefined]
**oldpassword** | **string** |  | [optional] [default to undefined]
**fullName** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateCurrentUserRequest } from './api';

const instance: UpdateCurrentUserRequest = {
    groups,
    config,
    newpassword,
    oldpassword,
    fullName,
    email,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
