import Map from "../Map";

/**
 * HashMap<K, V>
 */
class HashMap<K, V> implements Map<K, V> {
    
    /** local map storage */
    private storage = {};

    /**
     * Constructor
     */
    constructor() {}

    /**
     * put
     */
    public put(key: K, value: V): void {
        let keyHash = key.toString();
        this.storage[keyHash] = value;
    }

    /**
     * get
     */
    public get(key: K): V {
        let keyHash = key.toString();
        return this.storage[keyHash];
    }

    /**
     * remove
     */
    public remove(key: K): void {
        let newStorage = {};
        let keyHash = key.toString();
        for (let storageKey in this.storage) {
            this.addKey(storageKey, keyHash, newStorage);
        }
        this.storage = newStorage;
    }

    private addKey(storageKey: string, keyHash: string, newStorage): void {
        if (storageKey !== keyHash) {
            newStorage[storageKey] = this.storage[storageKey];
        }
    }

}

export default HashMap;