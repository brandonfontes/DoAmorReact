import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Map from '~/pages/Map';

const Routes = createAppContainer(createSwitchNavigator({ Main, Map }));

export default Routes;
