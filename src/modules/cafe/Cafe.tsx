import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Cafe: NavigationFunctionComponent = (): JSX.Element => {
    return <ScrollView testID={"MainPageID"} contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;
};

Cafe.options = {
};