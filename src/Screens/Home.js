import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fonts} from '../themes/fontssize';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../Images/Logo.png')} style={styles.Logo} />
      <Image source={require('../Images/man.png')} style={styles.bannerimage} />
      <Text style={styles.title}>Lorem ipsum {'\n'} dolor</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore 
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtionWrapper,
            {backgroundColor: Colors.primary},
          ]}
          onPress={handleLogin}>
          <Text style={styles.loginButtionText}>Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButtionWrapper]}
          onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign-up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  Logo: {
    width: 113.11,
    height: 39,
    marginVertical: 40,
  },
  bannerimage: {
    marginVertical: 15,
    width: 230,
    height: 250,
  },
  title: {
    fontSize: 36,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    color: Colors.gray,
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    width: '80%',
    //  alignContent:'center',
    //  justifyContent:'center',
    borderRadius: 100,
    height: 60,
    borderRightColor: '100%',
  },
  loginButtionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',

    borderRadius: 100,
  },
  loginButtionText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: fonts.Bold,
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: fonts.Bold,
  },
});
