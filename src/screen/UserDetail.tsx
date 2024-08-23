import {
  Linking,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { s } from "#/utils/styles";
import Container from "#/components/Container";
import TextView from "#/components/TextView";
import { ArrowDown, ArrowLeft, PhoneIcon } from "#/utils/icons";
import { useNavigation } from "@react-navigation/native";
import { SearchInput } from "#/components/SearchInput";
import { Image } from "expo-image";
import images from "@images";
import colors from "#/utils/colors";

const UserDetail = ({ route }) => {
  const { title } = route.params;
  const navigation = useNavigation<any>();

  const [searchValue, setSearchValue] = useState("");

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
              {title}
            </TextView>
            <View style={{ width: 40 }} />
          </View>
          <TouchableOpacity
            style={[
              styles.itemContainer,
              {
                flexDirection: "column",
              },
            ]}
          >
            <Image
              source={images.avatar}
              style={styles.avatar}
              accessible={true}
              accessibilityHint=""
              accessibilityIgnoresInvertColors
            />
            <TextView bold large style={s.mt10}>
              Б.Баянжаргал
            </TextView>
            <TextView color={"#000000A3"} style={s.mt5} large>
              Ашиглалт засварын инженер
            </TextView>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              Linking.openURL(`tel:99059846`);
            }}
          >
            <View style={[s.ml10, s.flex1]}>
              <TextView large color={"#000000A3"}>
                Утас:
              </TextView>
              <TextView style={s.mt5} large bold>
                99059846
              </TextView>
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: colors.success,
                },
              ]}
            >
              <PhoneIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              Linking.openURL(`tel:310`);
            }}
          >
            <View style={[s.ml10, s.flex1]}>
              <TextView large color={"#000000A3"}>
                Дотуур дугаар:
              </TextView>
              <TextView style={s.mt5} large bold>
                310
              </TextView>
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: colors.success,
                },
              ]}
            >
              <PhoneIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              Linking.openURL(`tel:99059846`);
            }}
          >
            <View style={[s.ml10, s.flex1]}>
              <TextView large color={"#000000A3"}>
                Яаралтай үед холбоо барих дугаар:
              </TextView>
              <TextView style={s.mt5} large bold>
                99059846
              </TextView>
            </View>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: colors.success,
                },
              ]}
            >
              <PhoneIcon />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </Container>
    </View>
  );
};

export default UserDetail;

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
  avatar: {
    width: 96,
    height: 96,
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
