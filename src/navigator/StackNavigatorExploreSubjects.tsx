import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {constantsStackExploreSubjects} from '../constants/constantsStackExploreSubjects';
import {ScreenExploreSubjects} from '../screens/ExploreSubjectsScreens/ScreenExploreSubjects';
import {ScreenSubjectUnjoined} from '../screens/ExploreSubjectsScreens/ScreenSubjectUnjoined';
import {globalStyles} from '../themes/global';

// TODO: Build cards for each category and each category has at least 1 subject

export const StackNavigatorExploreSubjects = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          ...globalStyles.backgroundApp,
          padding: 0,
          paddingHorizontal: 10,
          paddingBottom: 50,
        },
        headerShown: false,
      }}>
      <Stack.Screen
        name={constantsStackExploreSubjects.subjectsList.title}
        component={ScreenExploreSubjects}
      />
      <Stack.Screen
        name={constantsStackExploreSubjects.subject.title}
        component={ScreenSubjectUnjoined}
      />
    </Stack.Navigator>
  );
};
