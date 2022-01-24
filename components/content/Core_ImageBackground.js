import React from "react";
import { ImageBackground } from "react-native";
import { getEffectiveStyle } from "../../CoreUtil";
import { Default_CoreStyles } from "../../styles/Default_CoreStyles";

export default function Core_ImageBackground(props) {
  return (
    <ImageBackground
      resizeMode={props.resizeMode || "cover"}
      style={[
        getEffectiveStyle(props.coreClasses || [Default_CoreStyles.img]),
        props.height ? { height: props.height } : {},
        props.width ? { width: props.width } : {},
      ]}
      source={props.source}
    ></ImageBackground>
  );
}
