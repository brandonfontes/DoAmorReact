import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Map from '~/pages/Map';
import Profile from '~/pages/Profile';
import Institution from '~/pages/Institution';

const Routes = createAppContainer(createSwitchNavigator({ Main, Map, Profile, Institution }));

export default Routes;
