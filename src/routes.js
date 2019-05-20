import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Map from '~/pages/Map';
import Profile from '~/pages/Profile';

const Routes = createAppContainer(createSwitchNavigator({ Main, Map, Profile }));

export default Routes;
