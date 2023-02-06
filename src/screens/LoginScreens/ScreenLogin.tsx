import {Input} from '@rneui/base';
import {useFormik} from 'formik';
import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {ButtonApp} from '../../components/LoginComponents/ButtonLogin';
import {colorsApp} from '../../constants/colorsApp';
import {globalStyles} from '../../themes/global';
import * as yup from 'yup';
import {signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {login} from '../../store/actions/userLoginAction';
import {saveUser} from '../../store/actions/saveUserAction';
import {auth} from '../../services/firebase';

interface LoginProps {
  email: string;
  password: string;
}

export const ScreenLogin = () => {
  const dispatch = useDispatch();

  const succesfulLogin = (formData: LoginProps) => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        dispatch(saveUser(user));
        dispatch(login);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: formValue => {
      succesfulLogin(formValue);
    },
  });

  return (
    <>
      <View style={globalStyles.backgroundApp}>
        <Text style={globalStyles.title}>
          Welcome to Bulb Subjects! {'\n'}
          <Text
            style={{...globalStyles.title, fontFamily: 'JosefinSans-Light'}}>
            The best way to visualize your subjects
          </Text>
        </Text>
        <Image
          source={require('../../assets/BulbMenu.png')}
          style={{height: 220, width: 150, alignSelf: 'center'}}
        />
        <Input
          placeholder={'Email'}
          onChangeText={text => formik.setFieldValue('email', text)}
          placeholderTextColor={colorsApp.RED_COLOR}
          style={{
            fontSize: 20,
            fontFamily: 'JosefinSans-Light',
            color: colorsApp.BROWN_COLOR,
          }}
          inputContainerStyle={{borderBottomWidth: 0}}
          underlineColorAndroid={colorsApp.RED_COLOR}
          leftIcon={{
            name: 'envelope',
            type: 'font-awesome',
            color: colorsApp.RED_COLOR,
          }}
          errorMessage={formik.errors.email}
          value={formik.values.email}
        />
        <Input
          placeholder={'Password'}
          onChangeText={text => formik.setFieldValue('password', text)}
          placeholderTextColor={colorsApp.RED_COLOR}
          style={{
            fontSize: 20,
            fontFamily: 'JosefinSans-Light',
            color: colorsApp.BROWN_COLOR,
          }}
          inputContainerStyle={{borderBottomWidth: 0}}
          underlineColorAndroid={colorsApp.RED_COLOR}
          leftIcon={{
            name: 'key',
            type: 'font-awesome',
            color: colorsApp.RED_COLOR,
          }}
          errorMessage={formik.errors.password}
          secureTextEntry={true}
          value={formik.values.password}
        />
        <ButtonApp title="Log In" action={() => formik.submitForm()} />
        <TouchableOpacity>
          <Text style={styles.textSignUp}>Don't you have an account yet?</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  textSignUp: {
    fontFamily: 'JosefinSans-Bold',
    textAlign: 'center',
    color: colorsApp.RED_COLOR,
  },
});
