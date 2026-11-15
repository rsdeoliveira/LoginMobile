# LoginMobile

Aplicativo mobile desenvolvido como atividade acadêmica da disciplina **Programar Dispositivos Mobile e IoT**.

O projeto consiste em uma aplicação demonstrativa de Login e Cadastro de usuários, desenvolvida com React Native, Expo e TypeScript. Seu objetivo é aplicar conceitos de desenvolvimento mobile, navegação entre telas, componentes de interface e validação de formulários.

## Tecnologias utilizadas

- **React Native:** desenvolvimento da interface mobile.
- **Expo:** ambiente e ferramentas para desenvolvimento e execução.
- **TypeScript:** tipagem estática e maior segurança no código.
- **React Navigation:** gerenciamento da navegação entre telas.
- **Android Studio:** utilização de emulador para testes.

## Funcionalidades

### 1. Login
- Campo para e-mail.
- Campo para senha.
- Opção para visualizar ou ocultar a senha.
- Validação de preenchimento dos campos.
- Mensagem demonstrativa de sucesso.

### 2. Cadastro
- Campo para nome completo.
- Campo para e-mail.
- Campo para senha.
- Confirmação de senha.
- Opção para visualizar ou ocultar as senhas.
- Validação dos campos obrigatórios.
- Validação do formato do e-mail.
- Verificação do tamanho mínimo da senha.
- Verificação da correspondência entre as senhas.
- Exigência de aceite dos Termos de Uso e da Política de Privacidade.

### 3. Termos de Uso e Política de Privacidade
- Tela dedicada à apresentação dos Termos de Uso.
- Seção específica para a Política de Privacidade.
- Acesso aos documentos pelas telas de Login e Cadastro.
- Navegação de retorno à tela anterior.

## Estrutura do projeto

```text
LoginMobile/
├── assets/
├── src/
│   ├── components/
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   └── types.ts
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   └── PrivacyScreen.tsx
│   └── styles/
├── .gitignore
├── App.tsx
├── app.json
├── index.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

## Instalação e execução

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Expo Go em um dispositivo Android ou iOS, ou emulador Android configurado.

### 1. Clonar o repositório

```bash
git clone https://github.com/rsdeoliveira/LoginMobile.git
```

### 2. Acessar a pasta do projeto

```bash
cd LoginMobile
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o aplicativo

```bash
npx expo start
```

Após iniciar o Expo, é possível executar o aplicativo pelo Expo Go, utilizando o QR Code apresentado no terminal, ou pelo emulador Android.

## Observações

Esta aplicação possui finalidade acadêmica e demonstrativa.

As funcionalidades de Login e Cadastro simulam o comportamento de uma aplicação de autenticação, utilizando validações no próprio aplicativo.

**Não há integração com backend, banco de dados ou serviço real de autenticação.** Os dados informados nos formulários não são utilizados para criar contas reais.

Os Termos de Uso e a Política de Privacidade também possuem caráter demonstrativo e foram elaborados para fins didáticos.

## Autor

Desenvolvido por **Ronivon Soares de Oliveira**.

Projeto acadêmico — Disciplina Programar Dispositivos Mobile e IoT.