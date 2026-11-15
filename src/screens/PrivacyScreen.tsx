import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function PrivacyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Termos de Uso e Política de Privacidade
        </Text>

        <Text style={styles.updated}>
          Última atualização: novembro de 2026
        </Text>

        {/* TERMOS DE USO */}

        <Text style={styles.sectionTitle}>
          1. Termos de Uso
        </Text>

        <Text style={styles.paragraph}>
          Bem-vindo ao nosso aplicativo. Ao utilizar esta aplicação,
          o usuário declara estar ciente das condições estabelecidas
          neste documento.
        </Text>

        <Text style={styles.paragraph}>
          O aplicativo tem como finalidade oferecer uma interface
          de acesso e cadastro de usuários, permitindo a navegação
          entre suas funcionalidades disponíveis.
        </Text>

        <Text style={styles.paragraph}>
          O usuário compromete-se a fornecer informações
          verdadeiras durante o preenchimento dos formulários e
          utilizar o aplicativo de maneira adequada.
        </Text>

        <Text style={styles.paragraph}>
          O uso indevido da aplicação ou de suas funcionalidades
          poderá resultar na restrição de acesso.
        </Text>

        {/* POLÍTICA DE PRIVACIDADE */}

        <Text style={styles.sectionTitle}>
          2. Política de Privacidade
        </Text>

        <Text style={styles.paragraph}>
          Esta Política de Privacidade apresenta informações
          sobre o tratamento dos dados informados pelo usuário
          durante a utilização do aplicativo.
        </Text>

        <Text style={styles.subTitle}>
          2.1 Dados informados
        </Text>

        <Text style={styles.paragraph}>
          Os dados solicitados nos formulários incluem nome
          completo, endereço de e-mail e senha.
        </Text>

        <Text style={styles.subTitle}>
          2.2 Utilização dos dados
        </Text>

        <Text style={styles.paragraph}>
          Em uma aplicação real, essas informações poderiam ser
          utilizadas para identificação do usuário, gerenciamento
          de contas e disponibilização dos serviços oferecidos.
        </Text>

        <Text style={styles.subTitle}>
          2.3 Armazenamento e segurança
        </Text>

        <Text style={styles.paragraph}>
          A proteção das informações pessoais é importante.
          Aplicações reais devem adotar medidas técnicas e
          administrativas para evitar acessos não autorizados,
          perdas ou divulgação indevida de dados.
        </Text>

        <Text style={styles.subTitle}>
          2.4 Compartilhamento de informações
        </Text>

        <Text style={styles.paragraph}>
          Os dados pessoais não devem ser compartilhados com
          terceiros sem uma finalidade legítima e uma base legal
          adequada.
        </Text>

        <Text style={styles.subTitle}>
          2.5 Direitos do usuário
        </Text>

        <Text style={styles.paragraph}>
          O usuário possui direitos relacionados aos seus dados
          pessoais, incluindo acesso, correção e eliminação,
          conforme as disposições da Lei Geral de Proteção de
          Dados Pessoais (LGPD).
        </Text>

        {/* DISPOSIÇÕES FINAIS */}

        <Text style={styles.sectionTitle}>
          3. Disposições Finais
        </Text>

        <Text style={styles.paragraph}>
          Ao marcar a opção de concordância durante o cadastro,
          o usuário declara que leu e compreendeu os Termos de
          Uso e a Política de Privacidade apresentados.
        </Text>

        <Text style={styles.footer}>
          Documento demonstrativo desenvolvido para fins
          acadêmicos.
        </Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  content: {
    padding: 24,
    paddingBottom: 40,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#142B4A',
    marginBottom: 12,
  },

  updated: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#142B4A',
    marginTop: 25,
    marginBottom: 12,
  },

  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#334155',
    marginTop: 16,
    marginBottom: 7,
  },

  paragraph: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 23,
    textAlign: 'justify',
    marginBottom: 12,
  },

  footer: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 35,
  },

});