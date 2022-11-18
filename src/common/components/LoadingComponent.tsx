import {ImageBackground, StyleSheet, View} from "react-native";
import React from "react";
import {CommonStyles} from "../../core/theme/commonStyles";


export const LoadingComponent = () => {
  return (
    <View style={CommonStyles.flexCenter}>
        <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover' style={CommonStyles.flex1}/>
    </View>
  );
};

