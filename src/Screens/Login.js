import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fonts} from '../themes/fontssize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [secureEntery, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleSignUp =() => {
    navigation.navigate("SignUp")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbuttonWrapper} onPress={handleGoBack}>
        <AntDesign name={'arrowleft'} color={Colors.primary} size={30} />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainerView}>
          <Ionicons
            name={'mail-open-outline'}
            color={Colors.secondary}
            size={25}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor={Colors.secondary}
            keyboardType="email-address"
          />
        </View>

        <View style=  {[
           styles.inputContainerView,
           {justifyContent:'space-between'} ,
        ]}
        >
          <Ionicons
            name={'lock-closed-outline'}
            color={Colors.secondary}
            size={25}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Enter your Password"
            placeholderTextColor={Colors.secondary}
            secureTextEntry={secureEntery}
          />
          <TouchableOpacity
            onPress={() => {
              setSecureEntry(prev => !prev);
            }}>
            <Ionicons
              name={'eye-off-outline'}
              color={Colors.secondary}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgoetpassText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtnWrapper}>
        <Text style={styles.loginbtnText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orContinuewith}>or continue with</Text>

      <TouchableOpacity style={styles.googleBtnContinue}>
        <Image
          source={require('../Images/google.png')}
          style={styles.googleImage}
        />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>

      <View style={styles.footerContainerView}>
        <Text style={styles.accountText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
    padding: 20,
  },
  backbuttonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: Colors.gray,
    borderRadius: 25,
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginVertical: 20,
  },
  headingText: {
    fontSize: 32,
    color: Colors.gray,
    fontFamily: fonts.Regular,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainerView: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Colors.gray,
    height: 40,
    marginHorizontal: 20,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
   
  },
  textInput: {
    fontFamily: fonts.Light,
    paddingHorizontal: 15,
  },
  forgoetpassText: {
    textAlign: 'right',
    fontFamily: fonts.Bold,
    color: Colors.gray,
    marginVertical: 10,
  },
  loginbtnText: {
    fontSize: 18,
    fontFamily: fonts.Bold,
    textAlign: 'center',
    padding: 10,
    color: Colors.white,
  },
  loginBtnWrapper: {
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    marginVertical: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  orContinuewith: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.Bold,
    marginVertical: 20,
    color: Colors.primary,
  },
  googleBtnContinue: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 20,
  },
  googleImage: {
    width: 17,
    height: 18,
  },
  googleText: {
    fontSize: 18,
    fontFamily: fonts.Bold,
  },
  footerContainerView: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'center',
    alignContent: 'center',
    gap: 5,
  },
  accountText: {
    color: Colors.gray,
    fontFamily: fonts.Regular,
  },
  signUpText: {
    color: Colors.gray,
    fontWeight: 'bold',
  },
});
