import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "#/components/Container";
import { s } from "#/utils/styles";
import Header from "#/components/Header";
import Card from "#/view/Card";
import { BookIcon, ContactIcon } from "#/utils/icons";

const items = [
  {
    text: "Дүрэм журам",
    icon: <BookIcon />,
  },
  { text: "Утасны жагсаалт", icon: <ContactIcon /> },
];

const Home = () => {
  return (
    <View style={s.container}>
      <Container>
        <SafeAreaView>
          <Header />
          <View style={s.mt15}>
            {items?.map((item: any) => {
              return <Card text={item?.text} icon={item?.icon} />;
            })}
          </View>
        </SafeAreaView>
      </Container>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
