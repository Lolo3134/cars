import { NonUndefined, OwnStorage, Repository } from 'modules/storage/storage.types';

export const createStorage = <K extends string = string>(newStorage: OwnStorage = localStorage): Repository<K> => {
  const setItem = <T>(key: K, value: NonUndefined<T>): void => {
    newStorage.setItem(key, JSON.stringify(value));
  };

  const setItems = (items: Partial<Record<string, unknown>>): void => {
    Object.entries(items).forEach(([key, value]) => {
      setItem(key as K, value);
    });
  };

  const getItem = <R>(key: K): R | null => {
    const data = newStorage.getItem(key) ?? '';

    try {
      return JSON.parse(data);
    } catch {
      return null;
    }
  };

  const removeItem = (key: K): void => {
    newStorage.removeItem(key);
  };

  const clear = (): void => {
    newStorage.clear();
  };

  return { setItem, setItems, getItem, removeItem, clear };
};