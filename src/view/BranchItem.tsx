import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import TextView from "#/components/TextView";
import { ArrowDown } from "#/utils/icons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ item }: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Branch", {
          title: item?.title,
        })
      }
    >
      <TextView large color={"#000000F2"} style={{ fontWeight: "400" }}>
        {item?.title}
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
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
