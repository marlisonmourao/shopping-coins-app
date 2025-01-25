# Shopping Coins App

Bem-vindo ao Shopping Coins, um aplicativo mobile desenvolvido em React Native com TypeScript como parte de um teste técnico para a posição de Desenvolvedor Mobile. Este projeto foi criado para atender aos requisitos de compra de produtos, envio de notificações de confirmação de compras e integração com boas práticas de desenvolvimento.

## 📋 Requisitos Atendidos

### I. Configuração do Projeto
- [✅] Criar um projeto React Native.
- [✅] Incluir uma tela de boas-vindas (splash screen) que redirecione para a tela principal.

### II. Componente de Lista
- [✅] Desenvolver um componente de lista para exibir produtos disponíveis.
- [✅] Implementar uma lista infinita de itens (scroll infinito) usando API REST com no máximo 10 itens por vez.

### III. Autenticação
- [✅] Criar um sistema de autenticação básico.
- [✅] Permitir login utilizando e-mail e senha.
- [✅] Manter o estado de autenticação do usuário entre as sessões.
- [✅] Criar de cadastro de novos usuários.

### IV. Estrutura de Dados (API com JSON Server)
- [✅] Criar e configurar a API simulada com os seguintes objetos:
  - **Produtos**: ID, nome, descrição, preço, quantidade, imagem do produto, categoria, data de cadastro.
  - **Usuários**: ID, nome, e-mail, senha, saldo, data de cadastro.
  - **Compras**: ID, ID do usuário, ID do produto, quantidade, total pago, data da compra.
  - **Notificações**: ID, ID do usuário, mensagem, data de envio, data de previsão de chegada.

### V. Integração de Push Notification
- [❌] Implementar integração com Notifee para enviar notificações ao confirmar uma compra.
- [❌] Solicitar permissão do usuário para notificações ao fazer login.

### VI. Testes Automatizados
- [❌] Criar testes para os principais casos de uso do aplicativo utilizando Jest e Testing Library.

## 🛠️ Tecnologias Utilizadas
- **React Native** com Expo
- **TypeScript** para tipagem estática
- **Nativewind** para estilização
- **JSON Server** para simular uma API REST
- **Expo router** para navegação entre telas
- **Fetch api** para consumo de API
- **Zustand e AsyncStorage** para armazenamento local

## 🚀 Como Rodar o Projeto

1. Clone o repositório da API:
    ```bash
    git clone https://github.com/marlisonmourao/shopping-coins-app.git
    ```

2. Acesse a pasta do projeto:
    ```bash
    cd shopping-coins-app
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. **Importante:** Para que o aplicativo funcione corretamente, altere a URL base da API no arquivo `http/index.js` para o IP da sua máquina local, pois `http://localhost` não funcionará no dispositivo físico. 

   Para encontrar o **IP da sua máquina**, execute um dos seguintes comandos, dependendo do seu sistema operacional:

   - **No Windows**:
     ```bash
     ipconfig
     ```
     O endereço IP será listado em "Endereço IPv4".

   - **No macOS ou Linux**:
     ```bash
     ifconfig
     ```
     Procure pela seção `en0` ou `wlan0` e pegue o valor em `inet`.

   Após obter o IP, substitua a URL base no arquivo `http/index.js` de:
   ```js
   const baseURL = 'http://localhost:3000';
5. Inicie a API fake com JSON Server:
    ```bash
    npm run api
    ```
    Isso iniciará o servidor da API localmente, essencial para que as funcionalidades do aplicativo funcionem corretamente.

6. Inicie o aplicativo mobile:
    ```bash
    npx expo start
    ```
    Use um dispositivo físico ou emulador:
    - Leia o QR Code no terminal com o aplicativo Expo Go no seu celular ou use um emulador configurado.

## 👤 Usuário Padrão

O usuário padrão para fazer login no aplicativo é:

- **E-mail**: john@email.com
- **Senha**: 123456

## 📌 O que falta fazer?
- Implementar notificações de push.
- Criar testes automatizados para validar a aplicação.
- Aprimorar a interface com animações e transições suaves.