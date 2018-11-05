// @flow

import { mapProps } from 'recompose';
import type { HOC } from 'recompose';
import type { NavigationScreenProp, NavigationStateRoute } from "react-navigation";

type Props = {
  navigation: NavigationScreenProp<NavigationStateRoute>,
};

const withMapProps: HOC<*, Props> = mapProps((props: Props): Props => {
  return {
    ...props,
  }
});

export default withMapProps;
