import {View, Text, Image, StyleSheet} from 'react-native';
import {ButtonApp} from '../components/LoginComponents/ButtonLogin';
import {globalStyles} from '../themes/global';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../store/actions/userSignOutAction';
export const ScreenUser = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(store => store.saveUser);
  return (
    <>
      <View style={globalStyles.backgroundApp}>
        <Text style={globalStyles.title}>
          Hi {user.displayName}, welcome to Bulb Subjects {'\n'}
        </Text>
        <View style={styles.bulbsContainer}>
          <Image
            source={require('../assets/TurnedOff.png')}
            style={styles.imageTurnedOff}
          />
          <Image
            source={require('../assets/BulbMenu.png')}
            style={styles.imageTurnedOn}
          />
        </View>
        <Text style={{...globalStyles.title, fontFamily: 'JosefinSans-Light'}}>
          It's time to turn on your organization!
        </Text>
        <ButtonApp title="Sign Out" action={() => dispatch(signOut)} />
        <View style={{height: 50}}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageTurnedOff: {
    height: 180,
    width: 130,
    marginHorizontal: 5,
  },
  imageTurnedOn: {
    height: 210,
    width: 130,
    marginHorizontal: 5,
  },
  bulbsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
