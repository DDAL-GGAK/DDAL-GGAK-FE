interface VariantForm {
  [key: string]: object;
}

export type Variants = {
  readonly [T in keyof VariantForm]: Readonly<VariantForm[T]>;
};
