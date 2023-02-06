import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {constantsStackMySubjects} from '../constants/constantsStackMySubjects';
import {ScreenMySubjects} from '../screens/SubjectScreens/ScreenMySubjects';
import {ScreenSubject} from '../screens/SubjectScreens/ScreenSubject';
import {globalStyles} from '../themes/global';
// TODO: Flat list with user subjects merged in A-Z and hour

export const StackNavigatorMySubjects = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          ...globalStyles.backgroundApp,
          padding: 0,
          paddingHorizontal: 10,
          paddingBottom: 50
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={constantsStackMySubjects.subjectsList.title}
        component={ScreenMySubjects}
      />
      <Stack.Screen
        name={constantsStackMySubjects.subject.title}
        component={ScreenSubject}
      />
    </Stack.Navigator>
  );
};
