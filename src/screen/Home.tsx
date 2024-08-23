import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "#/components/Container";
import { s } from "#/utils/styles";
import Header from "#/components/Header";
import TextView from "#/components/TextView";
import colors from "#/utils/colors";
import { useQuery } from "@apollo/client";
import userQL from "#/graphql/userQL";
import BranchItem from "#/view/BranchItem";

const Home = () => {
  const { data, loading } = useQuery(userQL.branches, {
    variables: {
      withoutUserFilter: true,
    },
  });

  if (loading) {
    return null;
  }

  return (
    <View style={s.container}>
      <Container>
        <SafeAreaView>
          <Header />
          <View style={styles.branchHeader}>
            <TextView bold color={colors.white} style={s.ml30} boldless xxlarge>
              Салбарууд
            </TextView>
          </View>
          <FlatList
            data={data?.branches}
            renderItem={({ item }: any) => <BranchItem item={item} />}
          />
        </SafeAreaView>
      </Container>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  branchHeader: {
    backgroundColor: "#3FBA73",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    height: 70,
    justifyContent: "center",
  },
});
