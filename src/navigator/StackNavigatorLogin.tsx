import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeBulbSubjects} from '../components/HomeBulbSubjects';
import {constantsStackLogin} from '../constants/constantsStackLogin';
import {ScreenLogin} from '../screens/LoginScreens/ScreenLogin';
import {useSelector} from 'react-redux';

export const StackNavigatorLogin = () => {
  const Stack = createNativeStackNavigator();
  const {isLogin: login} = useSelector(store => store.userAuth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {login ? (
        <Stack.Screen
          name={constantsStackLogin.main.title}
          component={HomeBulbSubjects}
        />
      ) : (
        <Stack.Screen
          name={constantsStackLogin.login.title}
          component={ScreenLogin}
        />
      )}
    </Stack.Navigator>
  );
};
