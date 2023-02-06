import { useNavigation } from '@react-navigation/native';
import {useContext} from 'react';
import {ButtonApp} from '../../components/LoginComponents/ButtonLogin';
import {RegisteredContext} from '../../contexts/registeredContext';
import {ScreenSubject} from '../SubjectScreens/ScreenSubject';

export const ScreenSubjectUnjoined = ({route}: any) => {
  const context = useContext(RegisteredContext);
  const navigation = useNavigation();
  const updateList = (subject: any) => {
    context.setRegisteredSubjects([...context.registeredSubjects, subject]);
    navigation.goBack();
  };
  return (
    <>
      <ScreenSubject route={route}>
        <ButtonApp title="Join Subject!" action={() => updateList(route.params)} />
      </ScreenSubject>
    </>
  );
};
