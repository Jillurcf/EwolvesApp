import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert, Text, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-ui-lib';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen')



const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('https://your-api-endpoint/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Login successful!');
      } else {
        Alert.alert('Error', result.message || 'Login failed');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  const handleSignup = () => {
    navigation.navigate('signup')
  }

  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={{fontSize: 25, color: "black"}}>Welcome Back!</Text>
        <Text>Please input your personal data</Text>
      </View>
      <View style={{paddingVertical: height * 0.15}}>
        <View>
          <Text>Email</Text>
          <TextField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            floatingPlaceholder
            floatingPlaceholderColor="gray"
            containerStyle={styles.textFieldContainer}
            style={styles.input}
          />
        </View>

        <View style={styles.passwordContainer}>
          <Text>Password</Text>
          <TextField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            floatingPlaceholder
            floatingPlaceholderColor="gray"
            containerStyle={styles.textFieldContainer}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <FontAwesomeIcon
              name={passwordVisible ? 'eye-slash' : 'eye'}
              size={24}
              color="#B5B5B5"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.gradientButton} onPress={handleLogin}>
          <LinearGradient
            colors={['#8EE88E', '#80D180', '#6BAE6B']}
            style={styles.gradientBackground}
          >
            <Text style={styles.buttonText}>log in</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>or sign in with</Text>
          <View style={styles.separatorLine} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: width * 0.08 }}>
          <TouchableOpacity>
            <FontAwesome5Icon
              name="facebook"
              size={24}
              color="#545454"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesignIcon
              name="apple1"
              size={24}
              color="#545454"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesignIcon
              name="google"
              size={24}
              color="#545454"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 4, justifyContent: 'center' }}>
        <Text>
          Do you have any account? 
        </Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#EDF9F0',
  },
  textFieldContainer: {
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    top: 35, // Adjust this value to align the icon correctly
  },
  gradientButton: {
    marginVertical: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  gradientBackground: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#B5B5B5',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#B5B5B5',
  },
});

export default LoginForm;
