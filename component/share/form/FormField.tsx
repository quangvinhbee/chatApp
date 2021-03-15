export type FormField = {
  [x: string]: any;
  name?: string;
  value?: any;
  label?: string;
  id?: string;
  icon?: any;
  style?: string;
  placeholder?: string;
  onChanged?: (value: any) => void;
  validate?: (value: string) => string;
  required?: boolean;
  inputType?: string;
  tooltip?: string;
  subfix?: any;
  readOnly?: boolean;
};
