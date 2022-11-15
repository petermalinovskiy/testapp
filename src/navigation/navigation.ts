import {Navigation} from "react-native-navigation";
import {Pages} from "./pages";
import {Main} from "../modules/main/Main";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {Splash} from "../modules/splash/Splash";
import {reduxProvider} from "../core/store/store";
import {getStorybookUI} from "@storybook/react-native";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../core/theme/colors";
import {platformNativeColor} from "../common/helpers/colorHelpers";
import {ToastOverlay} from "../common/components/ToastOverlay";
import {DatePickerOverlay} from "../common/components/DatePickerOverlay";
import {Onboarding} from "../modules/onboarding/Onboarding";

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    layout: {
      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.background),
    },
  });
}

export function registerComponents() {
  if (__DEV__) {
    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  }
  Navigation.registerComponent(
    Pages.splash.name,
    () => gestureHandlerRootHOC(reduxProvider(Splash)),
    () => Splash,
  );
  Navigation.registerComponent(Pages.onboarding.name, () => Onboarding);
  Navigation.registerComponent(Pages.main.name, () => Main);
  Navigation.registerComponent(Pages.toast.name, () => ToastOverlay);
  Navigation.registerComponent(Pages.datePicker.name, () => DatePickerOverlay);
}
