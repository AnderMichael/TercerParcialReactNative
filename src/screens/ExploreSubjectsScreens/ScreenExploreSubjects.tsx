import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SubjectCard} from '../../components/SubjectCard';
import {colorsApp} from '../../constants/colorsApp';
import {collection, getDocs, query} from 'firebase/firestore/lite';
import {db} from '../../services/firebase';
import {useEffect, useState} from 'react';

export const ScreenExploreSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, '/subjects')).then(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSubjects(newData);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.exploreSubjects}>Explore Subjects</Text>
        <Image
          source={require('../../assets/TurnedOff.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.listSubjectsBackground}>
        <Text style={styles.availableForYou}>Available for you</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {subjects.map(subject => (
            <SubjectCard
              id={subject.id}
              title={subject.Nombre}
              teacher={subject.Docente}
              section={subject.Horario}
              image={subject.image}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  exploreSubjects: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 35,
    color: 'black',
  },
  availableForYou: {
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
    paddingTop: 5,
  },
  image: {
    height: 60,
    width: 40,
    marginHorizontal: 5,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
