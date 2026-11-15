import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleRegister() {

    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Atenção', 'Informe um e-mail válido.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Atenção', 'As senhas não correspondem.');
      return;
    }

    if (!acceptedTerms) {
      Alert.alert(
        'Atenção',
        'Você precisa concordar com os Termos de Uso e a Política de Privacidade.'
      );
      return;
    }

    Alert.alert(
      'Cadastro concluído!',
      'Seu cadastro demonstrativo foi realizado com sucesso.',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]
    );
  }

  return (

    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >

      <View style={styles.header}>
        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subtitle}>
          Preencha os dados para se cadastrar.
        </Text>
      </View>

      <View style={styles.form}>

        <Text style={styles.label}>Nome completo</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#94A3B8"
          value={name}
          onChangeText={setName}
        />

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

        <TextInput
          style={styles.input}
          placeholder="Crie uma senha"
          placeholderTextColor="#94A3B8"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmar senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Repita sua senha"
          placeholderTextColor="#94A3B8"
          secureTextEntry={!showPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity
          style={styles.showPasswordContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Text style={styles.showPassword}>
            {showPassword ? 'Ocultar senhas' : 'Mostrar senhas'}
          </Text>
        </TouchableOpacity>

        <View style={styles.termsContainer}>

          <TouchableOpacity
            style={[
              styles.checkbox,
              acceptedTerms && styles.checkboxChecked,
            ]}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
          >
            {acceptedTerms && (
              <Text style={styles.checkmark}>✓</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.termsText}>
            Li e concordo com os{' '}

            <Text
              style={styles.termsLink}
              onPress={() => navigation.navigate('Privacy')}
            >
              Termos de Uso e a Política de Privacidade.
            </Text>

          </Text>

        </View>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>
            Criar conta
          </Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>

          <Text style={styles.loginText}>
            Já possui uma conta?
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginLink}>
              Fazer login
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingVertical: 35,
  },

  header: {
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#142B4A',
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 8,
    textAlign: 'center',
  },

  form: {
    width: '100%',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 7,
    marginTop: 15,
  },

  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#1E293B',
  },

  showPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },

  showPassword: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '600',
  },

  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 25,
  },

  checkbox: {
    width: 21,
    height: 21,
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#142B4A',
    borderColor: '#142B4A',
  },

  checkmark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  termsText: {
    flex: 1,
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },

  termsLink: {
    color: '#2563EB',
    fontWeight: 'bold',
  },

  registerButton: {
    height: 52,
    backgroundColor: '#142B4A',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },

  loginText: {
    color: '#64748B',
    fontSize: 14,
  },

  loginLink: {
    color: '#2563EB',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },

});