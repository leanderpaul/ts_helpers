/**
 * Removes those fields in the object that do not have a valid input.
 * @param obj The object to be trimmed.
 */
export function trimObject<T extends object>(obj: T): T {
  const keys = Object.keys(obj) as (keyof T)[];
  const newObj: any = {};
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    let value: any = obj[key];
    if (typeof value === 'object' && !Array.isArray(value)) newObj[key] = trimObject(value);
    else if (value) newObj[key] = value;
  }
  return newObj;
}

/**
 * Returns a new object with the needed fields.
 * @param obj The orginal object.
 * @param keys The keys to be picked from the object.
 */
export function pickKeys<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const newObj: any = {};
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    newObj[key] = obj[key];
  }
  return newObj;
}

/**
 * Return a new object after removing the unneeded keys from the orginal object.
 * @param obj The orginal object.
 * @param keys The keys to be removed from the object.
 */
export function removeKeys<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const newObj: any = {};
  const allKeys = Object.keys(obj) as K[];
  for (let index = 0; index < allKeys.length; index++) {
    const key = allKeys[index];
    if (!keys.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
