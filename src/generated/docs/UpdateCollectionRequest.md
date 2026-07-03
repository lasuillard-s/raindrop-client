# UpdateCollectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view** | **string** |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**sort** | **number** |  | [optional] [default to undefined]
**_public** | **boolean** | Collection and raindrops that it contains will be accessible without authentication? | [optional] [default to undefined]
**parent** | [**CollectionRef**](CollectionRef.md) |  | [optional] [default to undefined]
**cover** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**expanded** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateCollectionRequest } from './api';

const instance: UpdateCollectionRequest = {
    view,
    title,
    sort,
    _public,
    parent,
    cover,
    expanded,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
