/* eslint-disable @typescript-eslint/no-explicit-any */
/*
export function withDefaults<
    T extends Record<string, unknown>,
    U extends keyof T,
    V,
    W extends { [Key in keyof Omit<T, U>]: T[Key] } & { [Key in U]?: T[Key] }
>(
    f: (params: T) => V,
    injectedParams: U extends T ? never : { [Key in U]: T[Key] },
): (params: { [Key in keyof W]: W[Key] }) => V {
    return params => {
        Object.keys(params).forEach(key => {
            const paramsKey = key as keyof W;
            const injectedParamsKey = key as keyof T;

            if (params[paramsKey] === undefined) {
                params[paramsKey] = injectedParams[injectedParamsKey] as any;
            }
        });

        return f({ ...injectedParams, ...params });
    };
}
*/

/*export function withDefaults<
    F extends (params: any) => unknown,
    InjectedParams extends (F extends (params: infer Params) => unknown ? Params : never)
>(
    f: F,
    injectedParams: InjectedParams,
): (params: any) => F extends (params: any) => infer R ? R : never {

    //return params => f({ ...injectedParams, ...params });

    return null as any;

}*/
