import React from "react";
import {
  Keyboard,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import TextView from "./TextView";
import { s } from "#/utils/styles";
import colors from "#/utils/colors";
import { MagnifyingGlassIcon } from "#/utils/icons";

interface Props {
  query: string | undefined;
  setIsInputFocused?: (v: boolean) => void;
  onChangeQuery: any;
  onSubmitQuery?: () => void;
  style?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
}
export function SearchInput({
  query,
  setIsInputFocused,
  onChangeQuery,
  onSubmitQuery,
  style,
  autoFocus,
}: Props) {
  const textInput = React.useRef<TextInput>(null);

  return (
    <View style={[s.row]}>
      <View style={[styles.inputContainer, style]}>
        <MagnifyingGlassIcon style={[styles.icon]} />
        <TextInput
          testID="searchTextInput"
          ref={textInput}
          autoFocus={autoFocus}
          placeholder="Хайх"
          selectTextOnFocus
          returnKeyType="search"
          value={query}
          style={[styles.input]}
          onFocus={() => setIsInputFocused?.(true)}
          onBlur={() => setIsInputFocused?.(false)}
          onChangeText={onChangeQuery}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          accessibilityRole="search"
          accessibilityHint=""
          autoCorrect={false}
          autoCapitalize="none"
          selectionColor={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: 6,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    fontSize: 17,
    minWidth: 0, // overflow mitigation for firefox
    paddingLeft: 10,
    height: 25,
  },
  cancelBtn: {
    paddingLeft: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
