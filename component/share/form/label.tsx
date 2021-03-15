import { Text, View } from "react-native";

type LabelProps = {
  [x: string]: any;
  htmlFor?: string;
  text: string;
  tooltip?: string;
};
export function Label({ text, tooltip, ...props }: LabelProps) {
  return (
    <View>
      <Text>{text}</Text>
      {tooltip && <View> </View>}
    </View>
  );
}
