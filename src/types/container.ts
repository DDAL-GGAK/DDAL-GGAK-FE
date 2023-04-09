export interface Container {
  children?: React.ReactNode;
  props?: any;
}

export interface InputContainer {
  props?: any;
  type?: string;
  placeholder: string;
}
