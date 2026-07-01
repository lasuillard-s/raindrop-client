# Collection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_id** | **number** |  | [default to undefined]
**title** | **string** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**user** | [**UserRef**](UserRef.md) |  | [default to undefined]
**_public** | **boolean** |  | [default to undefined]
**view** | **string** |  | [default to undefined]
**count** | **number** |  | [default to undefined]
**cover** | **Array&lt;string&gt;** |  | [default to undefined]
**sort** | **number** |  | [default to undefined]
**expanded** | **boolean** |  | [default to undefined]
**creatorRef** | [**CreatorRef**](CreatorRef.md) |  | [default to undefined]
**lastAction** | **string** |  | [default to undefined]
**created** | **string** |  | [default to undefined]
**lastUpdate** | **string** |  | [default to undefined]
**slug** | **string** |  | [default to undefined]
**color** | **string** |  | [optional] [default to undefined]
**access** | [**CollectionAccess**](CollectionAccess.md) |  | [default to undefined]
**author** | **boolean** |  | [default to undefined]
**parent** | **object** |  | [default to undefined]

## Example

```typescript
import { Collection } from './api';

const instance: Collection = {
    _id,
    title,
    description,
    user,
    _public,
    view,
    count,
    cover,
    sort,
    expanded,
    creatorRef,
    lastAction,
    created,
    lastUpdate,
    slug,
    color,
    access,
    author,
    parent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
