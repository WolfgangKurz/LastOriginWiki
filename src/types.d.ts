type Tuple<T, N, R extends T[] = []> = R["length"] extends N ? R : Tuple<T, N, [...R, T]>;

type Mutable<T> = { -readonly [P in keyof T]: T[P] };
