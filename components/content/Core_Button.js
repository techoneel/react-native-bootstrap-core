import React from "react";
import { Button, IconButton } from "react-native-paper";
import { getEffectiveStyle } from "../../CoreUtil";
import { Default_CoreStyles } from "../../styles/Default_CoreStyles";

const Core_Button = (props) => {
  const {
    coreClasses,
    label_coreClasses,
    mode = "contained",
    title = "Default Label",
    icon,
    color,
    size,
    uppercase = false,
    disabled = false,
    loading = false,
    compact = true,
    onPress,
    category = "primary",
  } = props;

  return category == "icon" ? (
    <IconButton
      style={[
        getEffectiveStyle([coreClasses] || [Default_CoreStyles.devBorder]),
      ]}
      icon={icon}
      color={color}
      size={size}
      onPress={onPress}
    />
  ) : (
    <Button
      mode={mode}
      uppercase={uppercase}
      disabled={disabled}
      compact={compact}
      loading={loading}
      icon={icon}
      onPress={onPress}
      style={[
        getEffectiveStyle([coreClasses] || [Default_CoreStyles.devBorder]),
      ]}
      labelStyle={[getEffectiveStyle([label_coreClasses])]}
    >
      {title}
    </Button>
  );
};

export default Core_Button;
