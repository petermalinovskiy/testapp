import {Pages} from "./pages";
import {Navigation} from "react-native-navigation";
import {Tabs} from "./tabs";
import {localization} from "../common/localization/localization";

export function setStorybookRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.storybook.name,
        id: Pages.storybook.id,
        options: {
          topBar: {
            visible: true,
            title: {
              text: localization.pages.storybook,
            },
          },
        },
      },
    },
  });
}

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.splash.name,
        id: Pages.splash.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setLoginRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.login.name,
        id: Pages.login.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setOnboardingRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.onboarding.name,
        id: Pages.onboarding.id,
        options: {
          topBar: {
            visible: true,
          },
        },
      },
    },
  });
}

export function setTabsRoot(callback?: () => void) {
  Navigation.setRoot({
    root: {
      stack: {
        id: Tabs.main.id,
        children: [
            {
              component: {
                id: Pages.main.id,
                name: Pages.main.name,
              },
            },
        ],
      },
    },
  }).then(callback);
}
