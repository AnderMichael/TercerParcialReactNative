import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colorsApp} from '../constants/colorsApp';
import {StackNavigatorExploreSubjects} from './StackNavigatorExploreSubjects';
import {StackNavigatorMySubjects} from './StackNavigatorMySubjects';
import {constantsBottomTabNavigator} from '../constants/constantsBottomTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScreenUser} from '../screens/ScreenUser';
import {useEffect, useMemo, useState} from 'react';
import {RegisteredContext} from '../contexts/registeredContext';
import {collection, doc, getDocs, setDoc} from 'firebase/firestore/lite';
import {db} from '../services/firebase';
import {useSelector} from 'react-redux';
export const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {user} = useSelector(store => store.saveUser);
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

  const [registeredSubjects, setRegisteredSubjects] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, `/users/${user.email}/subjects`))
      .then(querySnapshot => {
        const newData = querySnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRegisteredSubjects(newData);
      })
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const listSubjects = useMemo(
    () => ({registeredSubjects, setRegisteredSubjects}),
    [registeredSubjects],
  );

  return (
    <RegisteredContext.Provider value={listSubjects}>
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
    </RegisteredContext.Provider>
  );
};
