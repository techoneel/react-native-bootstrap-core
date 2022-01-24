import React from "react";
import { View } from "react-native";
import { TextInput, HelperText } from "react-native-paper";
import { getEffectiveStyle } from "../../CoreUtil";
import { Default_CoreStyles } from "../../styles/Default_CoreStyles";

const Core_TextInput = (props) => {
  const {
    coreClasses,
    mode = "flat",
    editable = true,
    secureEntry = false,
    multiline = false,
    numberOfLines = 1,
    label = "Default Label",
    placeholder,
    value = "",
    disabled = false,
    rightComponent,
    leftComponent,
    errorMessage = "",
    render,
    setValue,
    onBlur,
  } = props;
  return (
    <View
      style={[getEffectiveStyle(coreClasses || [Default_CoreStyles.devBorder])]}
    >
      <TextInput
        mode={mode}
        editable={editable}
        secureTextEntry={secureEntry}
        multiline={multiline}
        numberOfLines={numberOfLines}
        autocomplete="new-field"
        label={label}
        placeholder={placeholder}
        value={value}
        error={errorMessage ? true : false}
        disabled={disabled}
        right={rightComponent}
        left={leftComponent}
        render={render}
        onChangeText={(text) => setValue(text)}
        onBlur={onBlur}
      />
      <HelperText type="error" visible={errorMessage ? true : false}>
        {errorMessage}
      </HelperText>
    </View>
  );
};

export default Core_TextInput;
