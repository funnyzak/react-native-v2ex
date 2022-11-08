export const resolve = async <T = unknown, E = Error>(
  promiseLike: Promise<T> | T
): Promise<[E, undefined] | [undefined, T]> => {
  try {
    const data = await promiseLike
    return [undefined, data]
  } catch (error: unknown) {
    return [error as E, undefined]
  }
}
