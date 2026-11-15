import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    if (!email || !password) {
      alert('Preencha todos os campos.');
      return;
    }

    alert('Login demonstrativo realizado!');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Text style={styles.logo}>LoginMobile</Text>
          <Text style={styles.subtitle}>
            Bem-vindo! Faça seu login.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPassword}>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Ainda não possui uma conta?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.registerLink}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.privacyButton}
          onPress={() => navigation.navigate('Privacy')}
        >
          <Text style={styles.privacyText}>
            Termos de Uso e Política de Privacidade
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 40,
  },

  header: {
    alignItems: 'center',
    marginBottom: 45,
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#142B4A',
  },

  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 10,
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
    marginTop: 18,
  },

  input: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#1E293B',
  },

  passwordContainer: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  passwordInput: {
    flex: 1,
    fontSize: 15,
    color: '#1E293B',
  },

  showPassword: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 13,
  },

  loginButton: {
    height: 52,
    backgroundColor: '#142B4A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    flexWrap: 'wrap',
  },

  registerText: {
    color: '#64748B',
    fontSize: 14,
  },

  registerLink: {
    color: '#2563EB',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },

  privacyButton: {
    alignItems: 'center',
    marginTop: 45,
  },

  privacyText: {
    color: '#64748B',
    fontSize: 12,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});