import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import app from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  // Состояния для хранения email, пароля и ошибок входа
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const navigation = useNavigation(); 

  // Функция для обработки входа в систему
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Пользователь успешно вошёл в систему
        navigation.navigate('Home');
        const user = userCredential.user;
      })
      .catch((error) => {
        // Обработка ошибок входа
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  // Функция для перехода на экран регистрации
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      {/* Поле ввода для email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {/* Поле ввода для пароля */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {/* Кнопка для входа в систему */}
      <Button title="Login" onPress={handleLogin} />
      {/* Отображение ошибки входа, если она есть */}
      {loginError ? <Text>{loginError}</Text> : null}
      {/* Кнопка для перехода на экран регистрации */}
      <Button title="Регистрация" onPress={goToRegister} />
    </View>
  );
}

export default LoginScreen;
