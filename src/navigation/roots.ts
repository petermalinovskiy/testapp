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

export function setAuthorizationRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Pages.authorization.name,
              id: Pages.authorization.id,
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
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
