import {Platform, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {Fonts} from "./fonts";
import {Colors, PlatformColorsAndroid, PlatformColorsIOS} from "./colors";
import {CommonSizes} from "./commonSizes";
import {platformNativeColor} from "../../common/helpers/colorHelpers";

export const CommonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  } as ViewStyle,
  flex1SpaceAround: {
    flex: 1,
    justifyContent: "space-around"
  } as ViewStyle,
  flex1Padding: {
    flex: 1,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as ViewStyle,
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  flexColumnCenterStretch: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  } as ViewStyle,
  flexPlatformBackground: {
    flex: 1,
    backgroundColor: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.background),
  } as ViewStyle,
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  columnAlignStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  } as ViewStyle,
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.25,
        shadowRadius: 4,
      } as ViewStyle,
      android: {
        elevation: 4,
      } as ViewStyle,
    }),
  } as ViewStyle,
  iPhoneXFooter: {
    height: 20,
  } as ViewStyle,
  normalText: {
    fontFamily: Fonts.system,
    fontSize: CommonSizes.font.medium,
    lineHeight: CommonSizes.lineHeight.medium,
    color: platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primaryText),
  } as TextStyle,
  logo: {
    fontFamily: Fonts.lobster,
    fontSize: CommonSizes.font.extraLargePlus,
    lineHeight: CommonSizes.lineHeight.extraLargePlus,
    color: Colors.white,
  } as TextStyle,
  button: {
    backgroundColor: Colors.blue,
    width: 300,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: 'center',
  },
  greenButton: {
    width: 300,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.green,
    marginTop: 30,
    alignSelf: 'center',
  },
  textInput: {
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    color: Colors.white,
    borderColor: Colors.white,
    minWidth: "80%",
    alignSelf: 'center',
    textAlign: 'center',
  },
});
