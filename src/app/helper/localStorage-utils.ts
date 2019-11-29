export abstract class LocalStorageUtils {
  static setStorage = (key: string, value: any): void => localStorage.setItem(key, value);

  static deleteStorage = (key: string): void => localStorage.removeItem(key);

  static getstorage(key: string): any {
    let value = localStorage.getItem(key);

    try {
      value = JSON.parse(value);
    } catch (err) {
      console.error('[Error]-', err);
    }

    return value;
  }
}
