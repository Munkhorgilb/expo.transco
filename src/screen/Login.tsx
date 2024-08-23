import { Button } from "#/components/Button";
import Container from "#/components/Container";
import Input from "#/components/Input";
import { RadioButton } from "#/components/RadioButton";
import TextView from "#/components/TextView";
import userQL from "#/graphql/userQL";
import useApp from "#/hooks/useApp";
import colors from "#/utils/colors";
import { s } from "#/utils/styles";
import { deviceWidth, isIphoneWithNotch } from "#/utils/utils";
import { useApolloClient, useMutation } from "@apollo/client";
import images from "@images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import React, { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  TextInput,
  Platform,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const client = useApolloClient();
  const app = useApp();
  const [variables, setVariables] = React.useState<any>({
    email: "test@gmail.com",
    password: "Admin@123",
  });
  const [rememberMe, setRememberme] = useState(false);

  const phoneRef = React.useRef<TextInput>(null);
  const passwordRef = React.useRef<TextInput>(null);

  const [loginMutation, { loading }] = useMutation(userQL.login, {
    onCompleted: () => {
      client.resetStore();
      const properties = {
        email: variables.email,
        password: variables.password,
      };
      const jsonUser = JSON.stringify(properties);
      AsyncStorage.setItem("loggedUser", jsonUser).then(() => {
        app.setSession(true);
      });
    },
    onError: (e) => {
      console.log(JSON.stringify(e));
      return Alert.alert("Алдаа гарлаа");
    },
    refetchQueries: [{ query: userQL.currentUser }],
  });

  const validateEmail = (email: string) => {
    // Regular expression for validating an email
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const onSubmit = () => {
    if (validateEmail(variables.email)) {
      Keyboard.dismiss();
      loginMutation({
        variables: {
          email: variables.email,
          password: variables.password,
        },
      });
    } else {
      Alert.alert("Invalid email address");
    }
  };

  return (
    <Container>
      <SafeAreaView edges={["top"]} style={s.flex1}>
        <TouchableWithoutFeedback
          style={s.flex1}
          onPress={() => Keyboard.dismiss()}
        >
          <>
            <Image source={images.icon} style={styles.image} />
            <TextView
              style={[s.textCenter, s.mh50, s.mt30, s.mb50]}
              boldless
              large
            >
              Эрдэнэт Булганы цахилгаан түгээх сүлжээ ТӨХК
            </TextView>
            <KeyboardAvoidingView
              testID="signIn"
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={[s.flex1]}
              keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
            >
              <Input
                forwardedRef={phoneRef}
                label="И-мейл"
                value={variables.email}
                onChangeText={(val) =>
                  setVariables({ ...variables, email: val })
                }
                containerStyle={[s.mh24]}
                placeholder="email@address.com"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
              />
              <Input
                forwardedRef={passwordRef}
                label="Нууц үг"
                value={variables.password}
                onChangeText={(val) =>
                  setVariables({ ...variables, password: val })
                }
                containerStyle={[s.mh24]}
                placeholder="**********"
                secureTextEntry={true}
                returnKeyType="done"
              />
              <RadioButton
                label={"Сануулах"}
                style={[s.mt10, s.mh10]}
                isSelected={rememberMe}
                onPress={() => setRememberme(!rememberMe)}
              />
            </KeyboardAvoidingView>
          </>
        </TouchableWithoutFeedback>

        <Button style={styles.btn} onPress={onSubmit}>
          <TextView color={colors.white} large boldless>
            Нэвтрэх
          </TextView>
          {loading && <ActivityIndicator style={s.ml10} color={colors.white} />}
        </Button>
      </SafeAreaView>
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: deviceWidth / 4,
    height: deviceWidth / 4,
    alignSelf: "center",
    marginTop: 100,
  },
  header: {
    backgroundColor: "#3FBA73",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: 24,
    height: 70,
    justifyContent: "center",
  },
  btn: {
    marginHorizontal: 24,
    alignItems: "center",
    height: 56,
    justifyContent: "center",
    marginBottom: isIphoneWithNotch() ? 40 : 20,
    flexDirection: "row",
  },
});
