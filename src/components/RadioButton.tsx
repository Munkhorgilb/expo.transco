import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Button, ButtonType } from "./Button";
import colors from "#/utils/colors";
import TextView from "./TextView";

export function choose<U, T extends Record<string, U>>(
  value: keyof T,
  choices: T
): U {
  return choices[value];
}

export function RadioButton({
  testID,
  type = "default-light",
  label,
  isSelected,
  style,
  onPress,
}: {
  testID?: string;
  type?: ButtonType;
  label: string | JSX.Element;
  isSelected: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}) {
  const circleStyle = choose<TextStyle, Record<ButtonType, TextStyle>>(type, {
    primary: {
      borderColor: colors.primaryDark,
    },
    secondary: {
      borderColor: colors.neutralPrimaryColor,
    },
    "default-light": {
      borderColor: colors.border,
    },
  });
  const circleFillStyle = choose<TextStyle, Record<ButtonType, TextStyle>>(
    type,
    {
      primary: {
        backgroundColor: colors.primary,
      },
      secondary: {
        backgroundColor: colors.neutralPrimaryColor,
      },
      "default-light": {
        backgroundColor: colors.primary,
      },
    }
  );
  const labelStyle = choose<TextStyle, Record<ButtonType, TextStyle>>(type, {
    primary: {
      color: colors.white,
      fontWeight: "500",
    },
    secondary: {
      color: colors.white,
      fontWeight: "500",
    },
    "default-light": {
      color: colors.gray500,
    },
  });
  return (
    <Button testID={testID} type={type} onPress={onPress} style={style}>
      <View style={styles.outer}>
        <View style={[circleStyle, styles.circle]}>
          {isSelected ? (
            <View style={[circleFillStyle, styles.circleFill]} />
          ) : undefined}
        </View>
        {typeof label === "string" ? (
          <TextView style={[labelStyle, styles.label]}>{label}</TextView>
        ) : (
          <View style={styles.label}>{label}</View>
        )}
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  outer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 15,
    padding: 4,
    borderWidth: 1,
    marginRight: 10,
  },
  circleFill: {
    width: 16,
    height: 16,
    borderRadius: 10,
  },
  label: {
    flex: 1,
  },
});
