export type WithChildren = { children: JSX.Element | string | JSX.Element[] };

export type ComponentProps<P> = P extends React.ComponentType<infer Props> ? Props extends Object ?
   Props : never : never;