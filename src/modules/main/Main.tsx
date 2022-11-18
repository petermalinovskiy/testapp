import {NavigationFunctionComponent} from "react-native-navigation";
import {View, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";
import { Navigation } from 'react-native-navigation';

export const Main: NavigationFunctionComponent = (props): JSX.Element => {
  return <View style={styles.root}>
    <SafeAreaView>

    </SafeAreaView>
  </View>;
};

Main.options = {
  topBar: {
    largeTitle: {
      visible: false,
    },
    title: {
      text: localization.pages.main,
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
