import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s } from "#/utils/styles";
import Container from "#/components/Container";
import TextView from "#/components/TextView";
import { ArrowLeft, PhoneIcon } from "#/utils/icons";
import { useNavigation } from "@react-navigation/native";
import { SearchInput } from "#/components/SearchInput";
import { Image } from "expo-image";
import images from "@images";
import colors from "#/utils/colors";

const Branch = ({ route }) => {
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
          <SearchInput
            query={searchValue}
            onChangeQuery={setSearchValue}
            style={[s.mt15, s.mh16]}
          />
          <TextView style={[s.mh16, s.mt20]} boldless xxlarge>
            Инженерийн алба
          </TextView>
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate("UserDetail", {
                title,
              });
            }}
          >
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

export default Branch;

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
    width: 50,
    height: 50,
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
