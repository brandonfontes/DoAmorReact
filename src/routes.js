import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Map from '~/pages/Map';
import Profile from '~/pages/Profile';
import Instituicao from '~/pages/Instituicao';

const Routes = createAppContainer(createSwitchNavigator({ Main, Map, Profile, Instituicao }));

export default Routes;
