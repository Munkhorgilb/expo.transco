import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import images from "@images";
import TextView from "./TextView";
import { s } from "#/utils/styles";
import { NotificationIcon } from "#/utils/icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.avatar}
        style={styles.avatar}
        accessible={true}
        accessibilityHint=""
        accessibilityIgnoresInvertColors
      />
      <View style={[s.ml10, s.flex1]}>
        <TextView bold>Б.Баянжаргал</TextView>
        <TextView color={"#000000A3"} style={s.mt5}>
          Ашиглалт засварын инженер
        </TextView>
      </View>
      <Pressable style={styles.iconContainer}>
        <NotificationIcon />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  avatar: {
    width: 48,
    height: 48,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
});
