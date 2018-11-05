// @flow

import { mapProps } from 'recompose';
import type { NavigationScreenProp, NavigationStateRoute } from "react-navigation";

type Props = {
  navigation: NavigationScreenProp<NavigationStateRoute>,
};

export default mapProps((props: Props): Props => {
  return {
    ...props,
  }
});
