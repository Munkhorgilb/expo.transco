import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Container from "#/components/Container";
import { s } from "#/utils/styles";
import Header from "#/components/Header";

const More = () => {
  return (
    <View style={s.container}>
      <Container>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </Container>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({});
