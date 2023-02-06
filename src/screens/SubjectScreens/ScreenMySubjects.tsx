import { useContext } from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SubjectCard} from '../../components/SubjectCard';
import {colorsApp} from '../../constants/colorsApp';
import { RegisteredContext } from '../../contexts/registeredContext';

export const ScreenMySubjects = () => {
  const context = useContext(RegisteredContext)
  const makeCard = (subject:any) =>{
    return <SubjectCard 
    title={subject.title} 
    teacher={subject.teacher} 
    section={subject.section} 
    campus={'La Paz'} 
    id={subject.id} 
    image={subject.image} />;
  }
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
        <Text style={styles.timetable}> Your Timetable</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {context.registeredSubjects.map(subject =>makeCard(subject))}
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
