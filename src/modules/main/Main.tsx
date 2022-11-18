import {NavigationFunctionComponent} from "react-native-navigation";
import {View, StyleSheet, SafeAreaView} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";
import { Navigation } from 'react-native-navigation';
import {NoList} from "../../common/components/NoList";
import {RightButton} from "../rightButton/RightButton";


export const Main: NavigationFunctionComponent = (props): JSX.Element => {
  return <SafeAreaView style={styles.root}>
      <NoList/>
    </SafeAreaView>

};

Main.options = {
  topBar: {
    largeTitle: {
      visible: true,
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
