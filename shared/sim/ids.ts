export type Id<T extends string> = string & { readonly __brand: T }
