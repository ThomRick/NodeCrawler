/**
 * Map<K, V>
 */
interface Map<K, V> {
    put(key: K, value: V): void;
    get(key: K): V;
    remove(key: K): void;
}

export default Map;
