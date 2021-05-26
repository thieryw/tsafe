/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * This is a noOp that enables to statically ensure that T (the first type argument )
 * extends U ( the second type arguments )
 *
 * In other words, if do extends<T,U>() doesn't give red squiggles the assertion:
 * "T extends U" is true.
 *
 * const _x: U = null as any as T
 * https://docs.tsafe.dev/main/doextends
 */
export function doExtends<T extends U, U>(): T | U | void {}
