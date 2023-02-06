import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SubjectCard} from '../../components/SubjectCard';
import {colorsApp} from '../../constants/colorsApp';

export const ScreenMySubjects = () => {
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.mySubjects}>My Subjects</Text>
        <Image
          source={require('../../assets/BulbMenu.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.listSubjectsBackground}>
        <Text style={styles.timetable}> Your timetable</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mySubjects: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 35,
    color: colorsApp.RED_COLOR,
  },
  timetable: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 25,
    color: colorsApp.BROWN_COLOR,
    marginVertical: 10,
  },
  listSubjectsBackground: {
    flex: 6,
    backgroundColor: colorsApp.MUSTARD_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'stretch',
    paddingTop: 5,
  },
  image: {
    height: 70,
    width: 50,
    marginHorizontal: 5,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
