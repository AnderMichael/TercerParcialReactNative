import {Input} from '@rneui/base';
import {Text, TextInput} from 'react-native';
import {colorsApp} from '../../constants/colorsApp';

interface InputAppProps {
  placeholder: string;
  nameIcon: string;
}
export const InputApp = ({placeholder, nameIcon}: InputAppProps) => {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={colorsApp.RED_COLOR}
      style={{
        fontSize: 20,
        fontFamily: 'JosefinSans-Light',
        color: colorsApp.BROWN_COLOR,
      }}
      inputContainerStyle={{borderBottomWidth: 0}}
      underlineColorAndroid={colorsApp.RED_COLOR}
      leftIcon={{
        name: nameIcon,
        type: 'font-awesome',
        color: colorsApp.RED_COLOR,
      }}
    />
  );
};
