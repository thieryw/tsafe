// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 *
 * With this function we can check if its argument is like a Promise.
 * In other words, if its argument has a method that is named then.
 *
 * const simulateNetworkDelay = new Promise<void>(
 *  resolve => setTimeout(resolve, 1000)
 * );
 *
 * const result = isPromiseLike(simulateNetworkDelay);
 *
 * https://docs.tsafe.dev/main/ispromiselike
 */
export function isPromiseLike<T = void>(o: any): o is PromiseLike<T> {
    return typeof o?.then === "function";
}
