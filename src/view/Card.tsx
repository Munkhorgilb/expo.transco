import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import TextView from "#/components/TextView";
import { s } from "#/utils/styles";
import { ArrowDown } from "#/utils/icons";

const Card = ({ text, icon }: { text: string; icon: JSX.Element }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <TextView large boldless style={s.mt15}>
        {text}
      </TextView>
      <View style={styles.iconContainer}>
        <ArrowDown />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFFB2",
    borderWidth: 1,
    borderColor: "#00000014",
    height: 112,
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 16,
    marginTop: 16,
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
    position: "absolute",
    right: 32,
    top: 16,
  },
});
