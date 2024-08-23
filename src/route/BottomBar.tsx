/* eslint-disable react-native/no-inline-styles */
import React, { ComponentProps } from "react";
import {
  GestureResponderEvent,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated from "react-native-reanimated";
import { useNavigationTabState } from "./useNavigationTabState";
import { getTabState, TabState } from "./helpers";
import colors from "#/utils/colors";
import { MoreIcon, HomeIcon } from "#/utils/icons";
import { deviceWidth } from "#/utils/utils";
import TextView from "#/components/TextView";
import { s } from "#/utils/styles";

export const BottomBar = ({ navigation }: BottomTabBarProps) => {
  const safeAreaInsets = useSafeAreaInsets();

  const { isAtHome, isAtMore } = useNavigationTabState();

  const onPressTab = React.useCallback(
    (tab: string) => {
      //   track(`MobileShell:${tab}ButtonPressed`)
      const state = navigation.getState();
      const tabState = getTabState(state, tab);
      if (tabState === TabState.InsideAtRoot) {
        // store.emitScreenSoftReset()
      } else if (tabState === TabState.Inside) {
        navigation.dispatch(StackActions.popToTop());
      } else {
        navigation.navigate(`${tab}Tab`);
      }
    },
    [navigation]
  );

  const onPressHome = React.useCallback(() => onPressTab("Home"), [onPressTab]);
  const onPressMore = React.useCallback(() => onPressTab("More"), [onPressTab]);
  function clamp(v: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, v));
  }

  return (
    <Animated.View
      style={[
        styles.bottomBar,
        {
          marginBottom:
            Platform.OS === "ios"
              ? clamp(safeAreaInsets.bottom, 30, 30)
              : clamp(safeAreaInsets.bottom, 10, 10),
        },
      ]}
    >
      <Btn
        testID="bottomBarHomeBtn"
        icon={<HomeIcon fill={"#000"} />}
        activeIcon={<HomeIcon />}
        onPress={onPressHome}
        accessibilityRole="tab"
        accessibilityHint=""
        isActive={isAtHome}
        text={"Нүүр"}
      />
      <Btn
        testID="bottomBarSearchBtn"
        icon={<MoreIcon fill={"#000"} />}
        activeIcon={<MoreIcon />}
        onPress={onPressMore}
        accessibilityRole="search"
        accessibilityHint=""
        isActive={isAtMore}
        text={"Бусад"}
      />
    </Animated.View>
  );
};

interface BtnProps
  extends Pick<
    ComponentProps<typeof TouchableOpacity>,
    | "accessible"
    | "accessibilityRole"
    | "accessibilityHint"
    | "accessibilityLabel"
  > {
  testID?: string;
  icon?: JSX.Element;
  activeIcon?: JSX.Element;
  notificationCount?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  isActive?: boolean;
  text: string;
}

function Btn({
  testID,
  icon,
  activeIcon,
  onPress,
  onLongPress,
  accessible,
  accessibilityHint,
  accessibilityLabel,
  isActive,
  text,
}: BtnProps) {
  return (
    <TouchableOpacity
      testID={testID}
      style={[
        styles.ctrl,
        {
          backgroundColor: isActive ? colors.success : "#F5F5F5",
        },
      ]}
      onPress={() => {
        onPress && onPress;
      }}
      onPressIn={onLongPress ? undefined : onPress}
      onLongPress={onLongPress}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      {isActive ? activeIcon : icon}
      <TextView style={s.ml10} color={isActive ? colors.white : "#000000B2"}>
        {text}
      </TextView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: deviceWidth * 0.8,
    alignSelf: "center",
    borderRadius: 24,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderColor: "#00000014",
    borderWidth: 1,
  },
  ctrl: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 8,
  },
  ctrlIcon: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  homeIcon: {
    top: 0,
  },
});
