import React, {useEffect} from "react";
import {NavigationFunctionComponent} from "react-native-navigation";
import {setAuthorizationRoot} from "../../navigation/roots";
import {useAppSelector} from "../../core/store/store";
import {LoadingComponent} from "../../common/components/LoadingComponent";

export const Splash: NavigationFunctionComponent = () => {
  const isOnboardingVisited = useAppSelector((state) => state.system.isOnboardingVisited);

  useEffect(() => setAuthorizationRoot(), [isOnboardingVisited]);

  return <LoadingComponent />;
};
