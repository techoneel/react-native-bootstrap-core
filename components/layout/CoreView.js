import React from "react";
import { View } from "react-native";
import { getEffectiveStyle } from "../../CoreUtil";
import { Default_CoreStyles } from "../../styles/Default_CoreStyles";

export default function CoreView(props) {
  return (
    <View
      style={[
        getEffectiveStyle(props.coreClasses || [Default_CoreStyles.devBorder]),
      ]}
    >
      {props.children}
    </View>
  );
}
