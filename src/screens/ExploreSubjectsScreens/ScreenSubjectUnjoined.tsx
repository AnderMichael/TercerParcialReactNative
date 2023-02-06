import {Image} from '@rneui/base';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonApp} from '../../components/LoginComponents/ButtonLogin';
import {colorsApp} from '../../constants/colorsApp';

export const ScreenSubjectUnjoined = ({route}: any) => {
  return (
    <>
      <View style={styles.backgroundSubject}>
        <Image
          source={{uri: route.params.image}}
          style={{height: 150, borderRadius: 40}}
        />
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.textContainer}>
          <Text style={styles.section}>Horario:</Text>
          <Text style={styles.section}>{route.params.section}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.teacher}>Docente:</Text>
          <Text style={styles.teacher}>{route.params.teacher}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.teacher}>Campus:</Text>
          <Text style={styles.teacher}>{route.params.campus}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.teacher}>ID:</Text>
          <Text style={styles.teacher}>{route.params.id}</Text>
        </View>
      </View>
      <ButtonApp title="Join Subject!" />
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundSubject: {
    flex: 1,
    backgroundColor: colorsApp.MUSTARD_COLOR,
    marginVertical: 10,
    borderRadius: 40,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 35,
    color: 'black',
    textAlign: 'center',
  },
  section: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
  },
  teacher: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});
