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
import { ActivityIcon, HomeIcon } from "#/utils/icons";
import { Image } from "expo-image";
import { deviceWidth } from "#/utils/utils";

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
  const onPressActivity = React.useCallback(
    () => onPressTab("Activity"),
    [onPressTab]
  );
  const onPressProfile = React.useCallback(
    () => onPressTab("Profile"),
    [onPressTab]
  );

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
          backgroundColor: colors.primary600,
          paddingTop: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ]}
    >
      <Btn
        testID="bottomBarHomeBtn"
        icon={<HomeIcon size={24} style={[styles.ctrlIcon, styles.homeIcon]} />}
        onPress={onPressHome}
        accessibilityRole="tab"
        accessibilityHint=""
        isActive={isAtHome}
      />
      <Btn
        testID="bottomBarSearchBtn"
        icon={
          <ActivityIcon size={24} style={[styles.ctrlIcon, styles.homeIcon]} />
        }
        onPress={onPressActivity}
        accessibilityRole="search"
        accessibilityHint=""
        isActive={isAtMore}
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
  notificationCount?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  isActive?: boolean;
}

function Btn({
  testID,
  icon,
  onPress,
  onLongPress,
  accessible,
  accessibilityHint,
  accessibilityLabel,
  isActive,
}: BtnProps) {
  return (
    <View
      style={{
        flex: 1,
        borderColor: colors.border,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        testID={testID}
        style={[styles.ctrl]}
        onPress={() => {
          onPress && onPress;
        }}
        onPressIn={onLongPress ? undefined : onPress}
        onLongPress={onLongPress}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: deviceWidth * 0.55,
    alignSelf: "center",
    borderRadius: 60,
    height: 60,
  },
  ctrl: {
    flex: 1,
    alignItems: "center",
    marginTop: 12,
  },
  ctrlIcon: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  homeIcon: {
    top: 0,
  },
});
