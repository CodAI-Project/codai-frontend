# CodAI (Frontend)

## Demonstração
Link para o prototipo deployado [aqui](https://codai-hub-development.web.app/).

## Visão Geral
O CodAI Frontend é a interface de usuário da plataforma, que tem como objetivo simplificar e democratizar a programação. Este projeto é parte fundamental da experiência do usuário, proporcionando uma interface intuitiva e eficiente para todos os desenvolvedores, desde iniciantes até profissionais experientes.

## Como Executar Localmente
Para executar o CodAI Back-end localmente, siga estas etapas:

**Observações:** 
Como o projeto usa Firebase, você deve estar logado no firebase via cli na sua maquina pra conseguir usar o projeto. ele será instanciado na sua maquina com as suas credenciais. e configure uma .env usando a .env.example como referencia.
  
1. Clone o repositório:
   ```
   git clone https://github.com/CodAI-Project/codai-frontend.git
   cd codai-frontend
    ```
2. Instale as dependencias e de um start na aplicação next
    ```
    npm install

    ```
3. Copia do .env.example para um .env (WINDOWS)
    ```
   copy .env.example .env

    ```
    OU
3. Copia do .env.example para um .env (MAC/LINUX)
    ```
   cp .env.example .env

    ```
4. Preencha as variaveis com suas credenciais do firebase.
   

5. Iniciando localmente o projeto.
   ```
   npm run dev
   ```
## Tecnologias Utilizadas
- Next.js 13
- Ecosistema Firebase
- Integração com ChatGPT API
- Tailwind
- Formik
- Yup

# Arquitetura
![Desenho da arquitetura](https://firebasestorage.googleapis.com/v0/b/codai-development.appspot.com/o/codai-arquitetura-CodAI.drawio.png?alt=media&token=8098019e-2bd0-4f2e-b604-ba9338a22e91)
