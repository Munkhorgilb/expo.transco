import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import images from "@images";
import TextView from "./TextView";
import { s } from "#/utils/styles";
import { NotificationIcon } from "#/utils/icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation<any>();
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
        <TextView bold large>
          Б.Баянжаргал
        </TextView>
        <TextView color={"#000000A3"} style={s.mt5} large>
          Ашиглалт засварын инженер
        </TextView>
      </View>
      <Pressable
        style={styles.iconContainer}
        onPress={() => navigation.navigate("Notification")}
      >
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
    marginTop: 15,
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
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
