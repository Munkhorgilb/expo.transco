import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import images from "@images";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <ImageBackground style={styles.image} source={images.background}>
      {children}
    </ImageBackground>
  );
};

export default Container;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
