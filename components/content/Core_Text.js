import React from "react";
import { Text } from "react-native";
import { getEffectiveStyle } from "../../CoreUtil";

const Core_Text = (props) => {
  return (
    <Text style={[getEffectiveStyle(props?.coreClasses || [])]}>
      {props.children}
    </Text>
  );
};
export default Core_Text;
