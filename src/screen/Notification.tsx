import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "#/utils/styles";
import Container from "#/components/Container";
import TextView from "#/components/TextView";
import { ArrowLeft } from "#/utils/icons";
import { useNavigation } from "@react-navigation/native";

const Notification = ({ route }) => {
  const navigation = useNavigation<any>();

  return (
    <View style={s.container}>
      <Container>
        <SafeAreaView>
          <View style={[s.rowSpaceBetween, s.mh16, s.mt15]}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.goBack()}
            >
              <ArrowLeft />
            </TouchableOpacity>
            <TextView style={[s.flex1, s.textCenter]} boldless large>
              Мэдэгдэл
            </TextView>
            <View style={{ width: 40 }} />
          </View>
          <View style={styles.itemContainer}>
            <TextView bold large>
              Таньд мэдэгдэл байхгүй байна.
            </TextView>
          </View>
        </SafeAreaView>
      </Container>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  itemContainer: {
    backgroundColor: "#FFFFFFB2",
    borderWidth: 1,
    borderColor: "#00000014",
    borderRadius: 24,
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
});
