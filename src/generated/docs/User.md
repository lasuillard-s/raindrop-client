# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **number** |  | [default to undefined]
**config** | [**UserConfig**](UserConfig.md) |  | [default to undefined]
**dropbox** | [**UserDropbox**](UserDropbox.md) |  | [optional] [default to undefined]
**email** | **string** |  | [default to undefined]
**email_MD5** | **string** |  | [optional] [default to undefined]
**files** | [**UserFiles**](UserFiles.md) |  | [default to undefined]
**fullName** | **string** |  | [default to undefined]
**gdrive** | [**UserDropbox**](UserDropbox.md) |  | [optional] [default to undefined]
**groups** | [**Array&lt;Group&gt;**](Group.md) |  | [default to undefined]
**password** | **boolean** |  | [default to undefined]
**pro** | **boolean** |  | [default to undefined]
**proExpire** | **string** |  | [optional] [default to undefined]
**registered** | **string** |  | [default to undefined]
**tfa** | [**UserTfa**](UserTfa.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**avatar** | **string** |  | [optional] [default to undefined]
**lastAction** | **string** |  | [optional] [default to undefined]
**lastVisit** | **string** |  | [optional] [default to undefined]
**lastUpdate** | **string** |  | [optional] [default to undefined]
**emailConfirmed** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { User } from './api';

const instance: User = {
    _id,
    config,
    dropbox,
    email,
    email_MD5,
    files,
    fullName,
    gdrive,
    groups,
    password,
    pro,
    proExpire,
    registered,
    tfa,
    name,
    avatar,
    lastAction,
    lastVisit,
    lastUpdate,
    emailConfirmed,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
