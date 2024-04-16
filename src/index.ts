export class MappingMap<K extends keyof Iface, V, Iface> {
  #state: Map<K, V> = new Map()
  public get size() {
    return this.#state.size
  }

  public get state() {
    return this.#state
  }

  get<Key extends K>(key: Key) {
    return this.#state.get(key) as Iface[Key] | undefined
  }

  set<Key extends K>(key: Key, value: Iface[Key]) {
    return this.#state.set(key, value as V)
  }

  forEach(callbackFn: (value: V, key: K, map: Map<K, V>) => void, thisArgs?: any) {
    return this.#state.forEach(callbackFn, thisArgs)
  }

  delete<Key extends K>(key: Key) {
    return this.#state.delete(key)
  }

  clear() {
    return this.#state.clear()
  }

  keys() {
    return this.#state.keys()
  }

  values() {
    return this.#state.values()
  }

  entries() {
    return this.#state.entries()
  }

  has<Key extends K>(key: Key) {
    return this.#state.has(key)
  }

  jsonString() {
    return JSON.stringify(Object.fromEntries(this.#state))
  }

  jsonObject() {
    return Object.fromEntries(this.#state)
  }
}

export class MappingObj<K extends keyof Iface, V, Iface> {
  #state: any = {}
  public get size() {
    return Object.keys(this.#state).length
  }

  public get state() {
    return this.#state
  }

  get<Key extends K>(key: Key) {
    return this.#state[key] as Iface[Key] | undefined
  }

  set<Key extends K>(key: Key, value: Iface[Key]) {
    this.#state[key] = value as V
  }

  forEach<Key extends K>(callbackFn: (value: Iface[Key], index: number, array: Key) => void, thisArgs?: any) {
    Object.keys(this.#state).forEach(callbackFn as any, thisArgs)
  }

  delete<Key extends K>(key: Key) {
    delete this.#state[key]
  }

  clear() {
    this.#state = {}
  }

  keys(): K[] {
    return Object.keys(this.#state) as any
  }

  values(): V[] {
    return Object.values(this.#state) as any
  }

  entries(): [K, V][] {
    return Object.entries(this.#state) as any
  }

  has<Key extends K>(key: Key) {
    return Object.prototype.hasOwnProperty(key)
  }

  jsonString() {
    return JSON.stringify(this.#state)
  }

  jsonObject() {
    return this.#state
  }
}
