import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colorsApp} from '../constants/colorsApp';
import {StackNavigatorExploreSubjects} from './StackNavigatorExploreSubjects';
import {StackNavigatorMySubjects} from './StackNavigatorMySubjects';
import {constantsBottomTabNavigator} from '../constants/constantsBottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScreenUser} from '../screens/ScreenUser';
export const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const myMap = new Map<string, any>([
    [
      constantsBottomTabNavigator.mySubjects.tab,
      constantsBottomTabNavigator.mySubjects.icon,
    ],
    [
      constantsBottomTabNavigator.exploreSubjects.tab,
      constantsBottomTabNavigator.exploreSubjects.icon,
    ],
    [
      constantsBottomTabNavigator.user.tab,
      constantsBottomTabNavigator.user.icon,
    ],
  ]);

  const giveIconTab = (nameScreenTab: string, color: string) => {
    return <Icon name={myMap.get(nameScreenTab)} size={20} color={color} />;
  };
  return (
    <Tab.Navigator
      initialRouteName={constantsBottomTabNavigator.mySubjects.title}
      screenOptions={({route}) => {
        let nameScreenTab = route.name;
        return {
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colorsApp.BROWN_COLOR,
            height: 50,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          },
          tabBarLabelStyle: {
            fontFamily: 'JosefinSans-Bold',
            marginBottom: 5,
          },
          tabBarIcon: ({color}) => {
            return giveIconTab(nameScreenTab, color);
          },
          tabBarInactiveTintColor: colorsApp.GRAY_COLOR,
          tabBarActiveTintColor: colorsApp.MUSTARD_COLOR,
        };
      }}>
      <Tab.Screen
        name={constantsBottomTabNavigator.mySubjects.tab}
        component={StackNavigatorMySubjects}
        options={{title: constantsBottomTabNavigator.mySubjects.title}}
      />
      <Tab.Screen
        name={constantsBottomTabNavigator.exploreSubjects.tab}
        component={StackNavigatorExploreSubjects}
        options={{title: constantsBottomTabNavigator.exploreSubjects.title}}
      />
      <Tab.Screen
        name={constantsBottomTabNavigator.user.tab}
        component={ScreenUser}
        options={{title: constantsBottomTabNavigator.user.title}}
      />
    </Tab.Navigator>
  );
};
