import {StyleSheet} from 'react-native';
import {colorsApp} from '../constants/colorsApp';
// ! This is the palette color https://www.instagram.com/p/CloCdxBJzs9/?hl=es-la

export const globalStyles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    backgroundColor: colorsApp.YELLOW_COLOR,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
  },
  title: {
    fontFamily: 'JosefinSans-SemiBold',
    textAlign: 'center',
    fontSize: 25,
    color: colorsApp.RED_COLOR,
  },
});
