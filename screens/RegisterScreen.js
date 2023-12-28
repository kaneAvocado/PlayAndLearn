import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import app from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'; 
function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const navigation = useNavigation();
  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisterError(errorMessage);
      });
  };

  const goBackToLogin = () => {
    navigation.goBack(); 
};

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Регистрация" onPress={handleRegister} />
      {registerError ? <Text>{registerError}</Text> : null}
      <Button title="Вернуться к входу" onPress={goBackToLogin} />
    </View>
  );
}

export default RegisterScreen;
