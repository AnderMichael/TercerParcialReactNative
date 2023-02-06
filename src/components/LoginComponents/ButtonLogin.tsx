import {Button} from '@rneui/base';
import {colorsApp} from '../../constants/colorsApp';
import {globalStyles} from '../../themes/global';

interface ButtonAppProps {
  title: string;
  action?: () => void;
}

export const ButtonApp = ({title, action}: ButtonAppProps) => {
  return (
    <Button
      radius="md"
      type="solid"
      color={colorsApp.RED_COLOR}
      containerStyle={{marginVertical: 10}}
      title={title}
      titleStyle={{
        ...globalStyles.title,
        fontFamily: 'JosefinSans-Bold',
        color: colorsApp.YELLOW_COLOR,
      }}
      onPress={action}
    />
  );
};
