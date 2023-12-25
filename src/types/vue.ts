import type { VNodeProps, AllowedComponentProps } from "vue"

export type ComponentProps<C> = C extends new (...args: any) => any
? Omit<InstanceType<C>['$props'], keyof VNodeProps | keyof AllowedComponentProps>
: never