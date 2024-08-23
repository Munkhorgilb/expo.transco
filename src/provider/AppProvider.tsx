import { useQuery } from "@apollo/client";
import React, { createContext, useCallback, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import _ from "lodash";
import { IUser } from "#/utils/type";
import userQL from "#/graphql/userQL";

export const AppContext = createContext({} as IApplication);

const { Provider } = AppContext;

export interface IApplication {
  currentUser: IUser;
  hasSession?: boolean;
  setSession: (session: boolean) => void;
}

const AppProvider = (props: any) => {
  const [session, setSession] = useState(false);

  const { data, loading } = useQuery(userQL.currentUser, {
    fetchPolicy: "cache-first",
    onCompleted: (response: any) => {
      if (!!response?.currentUser?._id) {
        setSession(true);
      }
    },
  });

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <StatusBar hidden />
        <ActivityIndicator size={"large"} />
      </SafeAreaView>
    );
  }

  const mContext: IApplication = {
    currentUser: data?.currentUser || {},
    hasSession: session,
    setSession,
  };

  return <Provider value={mContext}>{props.children}</Provider>;
};

export default AppProvider;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
