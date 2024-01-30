export type NonUndefined<T> = T extends undefined ? never : T;

export interface Repository<K extends string = string> {
  setItem: <T>(key: K, value: NonUndefined<T>) => void;
  setItems: (items: Partial<Record<K, unknown>>) => void;
  getItem: <T>(key: K) => T | null;
  removeItem: (key: K) => void;
  clear: VoidFunction;
}

export type OwnStorage = Repository | Omit<Storage, 'length' | 'key'>;