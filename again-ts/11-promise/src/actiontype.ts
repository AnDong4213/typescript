type ResolveType<T = any> = (resolve_success_value: T) => any | null;

type FailType<T = any> = (reject_fail_value: any) => any;

type ExecutorType<T> = (resolve: ResolveType, reject: FailType) => any;

export { ResolveType, FailType, ExecutorType };
