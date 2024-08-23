import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "#/components/Container";
import { s } from "#/utils/styles";
import Header from "#/components/Header";
import Card from "#/view/Card";
import { BookIcon, ContactIcon } from "#/utils/icons";
import TextView from "#/components/TextView";
import colors from "#/utils/colors";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import userQL from "#/graphql/userQL";
import useApp from "#/hooks/useApp";

const logout = gql`
  mutation {
    logout
  }
`;

const items = [
  {
    text: "Дүрэм журам",
    icon: <BookIcon />,
  },
  { text: "Утасны жагсаалт", icon: <ContactIcon /> },
];

const More = () => {
  const client = useApolloClient();
  const app = useApp();

  const [logOutMutation] = useMutation(logout, {
    onCompleted: async () => {
      client.clearStore();
      app.setSession(false);
    },
    refetchQueries: [{ query: userQL.currentUser }],
  });

  return (
    <View style={s.container}>
      <Container>
        <SafeAreaView style={s.flex1}>
          <Header />
          <View style={s.mt15}>
            {items?.map((item: any, index: number) => {
              return <Card text={item?.text} icon={item?.icon} key={index} />;
            })}
          </View>
          <View style={s.flex1} />
          <Pressable
            style={{
              paddingBottom: 120,
            }}
            onPress={() => {
              logOutMutation();
            }}
          >
            <TextView style={s.textCenter} color={colors.Giratina500} boldless>
              Гарах
            </TextView>
          </Pressable>
        </SafeAreaView>
      </Container>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
