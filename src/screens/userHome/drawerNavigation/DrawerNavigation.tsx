import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHome from '../UserHome';
import Inbox from '../inbox/Inbox';

const Drawer = createDrawerNavigator();

const DrawerNaivation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={UserHome} />
      <Drawer.Screen name="inbox" component={Inbox} />
    </Drawer.Navigator>
  );
}

export default DrawerNaivation;

