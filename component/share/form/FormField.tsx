export type FormField = {
  [x: string]: any;
  name?: string;
  value?: any;
  label?: string;
  id?: string;
  leftIcon?: any;
  style?: string;
  placeholder?: string;
  onChanged?: (value: any) => void;
  validate?: (value: string) => string;
  required?: boolean;
  keyboardType?:
    | "default"
    | "number-pad"
    | "email-address"
    | "phone-pad"
    | "visible-password";
  tooltip?: string;
  subfix?: any;
  readOnly?: boolean;
};
