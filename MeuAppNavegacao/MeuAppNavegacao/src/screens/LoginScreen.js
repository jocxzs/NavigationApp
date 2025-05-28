import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [loginkey, setLoginkey] = useState('')

  const handleLogin = async (loginkey) => {
    if (login === 'admin' && senha === '123') {
      navigation.replace('Home');
      try {
        await AsyncStorage.setItem('key', 'logged' JSON.stringify(loginkey));
      }catch (error){
        console.log("Erro ao salvar login", error)
      }
    } else {
      console.log('Login incorreto');
      Alert.alert('Login ou senha incorretos', errror);
    }
  };
  const getKey = async () =>{
    try{
      const sotredKey = await AsyncStorage()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    width: windowWidth * 0.7,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
});
