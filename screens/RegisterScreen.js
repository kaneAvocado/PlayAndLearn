import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import app from '../firebaseConfig'; // импорт конфигурации Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'; 

function RegisterScreen() {
  // Состояния для управления email, паролем и ошибками регистрации
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const navigation = useNavigation(); // Хук для управления навигацией

  // Обработчик нажатия на кнопку регистрации
  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная регистрация пользователя
        navigation.navigate('Home');
        const user = userCredential.user;
      })
      .catch((error) => {
        // Обработка ошибок при регистрации
        const errorCode = error.code;
        const errorMessage = error.message;
        setRegisterError(errorMessage); // Установка сообщения об ошибке
      });
  };

  // Функция для возвращения на экран входа
  const goBackToLogin = () => {
    navigation.goBack(); // Возврат на предыдущий экран в стеке навигации
  };

  return (
    <View>
      {/* Поле ввода для email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Обновление состояния при изменении текста
      />
      {/* Поле ввода для пароля */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword} // Обновление состояния при изменении текста
        secureTextEntry // Скрытие вводимого текста для пароля
      />
      {/* Кнопка для регистрации */}
      <Button title="Регистрация" onPress={handleRegister} />
      {/* Вывод ошибки регистрации, если она есть */}
      {registerError ? <Text>{registerError}</Text> : null}
      {/* Кнопка для возвращения на экран входа */}
      <Button title="Вернуться к входу" onPress={goBackToLogin} />
    </View>
  );
}

export default RegisterScreen;
