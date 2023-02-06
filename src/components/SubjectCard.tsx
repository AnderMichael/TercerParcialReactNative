import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {constantsStackExploreSubjects} from '../constants/constantsStackExploreSubjects';
import {subjectsProps} from '../interfaces/subjectProps';
export const SubjectCard = ({
  title,
  section,
  teacher,
  id,
  campus = 'La Paz',
}: subjectsProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(constantsStackExploreSubjects.subject.title, {
          title,
          section,
          teacher,
          id,
          campus,
        })
      }>
      <View style={styles.backgroundCard}>
        <View style={styles.imageCardContainer}>
          <Image
            source={{
              uri: 'https://esports.as.com/2022/04/19/fortnite/Escopeta-asaltadora_1566453368_962172_1440x600.jpg',
            }}
            style={{height: 120, borderRadius: 20}}
          />
        </View>
        <View style={styles.datesCardContainer}>
          <View style={styles.datesContainer}>
            <Text style={{fontSize: 20, fontFamily: 'JosefinSans-SemiBold'}}>
              {title}
            </Text>
            <Text style={{fontSize: 15, fontFamily: 'JosefinSans-Regular'}}>
              Horario: {section}
            </Text>
            <Text style={{fontSize: 15, fontFamily: 'JosefinSans-Italic'}}>
              {<Icon name="person-sharp" />} {teacher}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundCard: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#fbd686',
    marginVertical: 5,
  },
  imageCardContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
  },
  datesCardContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  datesContainer: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
