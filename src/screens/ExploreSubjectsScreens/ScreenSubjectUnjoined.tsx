import {Image} from '@rneui/base';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonApp} from '../../components/LoginComponents/ButtonLogin';
import {colorsApp} from '../../constants/colorsApp';
import {ScreenSubject} from '../SubjectScreens/ScreenSubject';

export const ScreenSubjectUnjoined = ({route}: any) => {
  return (
    <>
      <ScreenSubject route={route}>
        <ButtonApp title="Join Subject!" />
      </ScreenSubject>
    </>
  );
};
