<h1 align="center">
    MAPPING-DATA
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/damartripamungkas/mapping-data?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="Made by" src="https://img.shields.io/static/v1?label=made%20by&message=damartripamungkas&color=04D361&labelColor=000000">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/damartripamungkas/mapping-data?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/damartripamungkas/mapping-data?color=04D361&labelColor=000000">
  </a>
</p>

### 📖 Description :

This package is made for those of you who want the key and value to have the same type of type, because using ``new Map()``` and defining the type to the map then only the key works while the value does not, I give an example below:

#### Using Map

```typescript
type TypeStateAs = {
  name: string
  age: number
  human: boolean
}
const state = new Map<keyof TypeStateAs, TypeStateAs[keyof TypeStateAs]>()
state.set(`name`, true) // is not an error, even though the value type is not boolean. expect this to be an error
```

#### Using Package

```typescript
import { MappingMap } from "mapping-data"

type TypeStateAs = {
  name: string
  age: number
  human: boolean
}
const state = new MappingMap<keyof TypeStateAs, TypeStateAs[keyof TypeStateAs], TypeStateAs>()
state.set(`name`, true) // this is will throw error in editor code, because value type `name` is string
```

### 💻 Step to install :

```
npm install mapping-data
```

### ✏️ Example :

see full [here](./test/test.js)

```typescript
import { MappingMap, MappingObj } from "mapping-data"

type TypeStateAs = {
  name: string
  age: number
  human: boolean
}
const state = new MappingMap<keyof TypeStateAs, TypeStateAs[keyof TypeStateAs], TypeStateAs>()
state.set(`name`, `damar`)
state.get(`name`) // damar
state.jsonObject() // {name:"damar"}
state.jsonString() // "{"name":"damar"}"
```

### 🧾 Pre-Requisistes :

```
node.js
```

### 📝 License :

Licensed under the [MIT License](./LICENSE).
