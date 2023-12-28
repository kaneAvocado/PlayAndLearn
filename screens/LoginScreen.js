import React, { useState } from 'react';
import { TextInput, Button, Text, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Вы можете перенаправить пользователя на другой экран или выполнить другие действия
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Обновить состояние, чтобы отобразить ошибку
        setLoginError(errorMessage);
      });
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
      <Button title="Login" onPress={handleLogin} />
      {loginError ? <Text>{loginError}</Text> : null}
    </View>
  );
}

export default LoginScreen;
