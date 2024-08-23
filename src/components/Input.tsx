import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import TextView from "./TextView";
import colors from "#/utils/colors";

const Input = ({
  forwardedRef,
  label,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  editable = true,
  ...props
}: {
  forwardedRef?: any;
  label: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  editable?: boolean;
  [key: string]: any;
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextView style={styles.label}>{label}</TextView>
      <TextInput
        placeholderTextColor={colors.disabled}
        editable={editable}
        scrollEnabled={false}
        ref={forwardedRef}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, inputStyle]}
        selectionColor={colors.primary}
        autoCorrect={false}
        keyboardAppearance="dark"
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontWeight: "500",
    fontSize: 15,
    color: colors.gray800,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50,
    marginTop: 5,
    borderColor: colors.gray300,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
});
