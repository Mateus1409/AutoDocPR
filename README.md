# AutoDoc Paraná

Sistema governamental para geração de receitas médicas online, permitindo aos cidadãos gerar receitas com base em sintomas relatados.

## 🎯 Objetivo

Facilitar o acesso do cidadão a receitas médicas online de forma segura e prática, com validação de segurança e limitação de receitas por CPF.

## 📁 Estrutura do Projeto

```
AutoDocPR/
├── frontend/
│   ├── screens/           # Páginas HTML
│   │   ├── login.html     # Página de login/registro
│   │   ├── home.html      # Dashboard principal
│   │   ├── conta.html     # Gerenciamento de conta
│   │   ├── index.html     # Geração de receitas
│   │   ├── about.html     # Sobre o projeto
│   │   └── pharmacies.html # Farmácias parceiras
│   └── assets/
│       ├── css/           # Estilos
│       │   └── style.css  # CSS principal
│       ├── js/            # JavaScript
│       │   ├── auth.js    # Sistema de autenticação
│       │   ├── home.js    # Lógica da página home
│       │   ├── conta.js   # Lógica da página conta
│       │   └── script.js  # Lógica de geração de receitas
│       └── images/        # Imagens (futuro)
└── backend/               # Backend (futuro)
```

## 🚀 Funcionalidades

### 🔐 Sistema de Autenticação
- Registro de usuários com validação de CPF e e-mail
- Login seguro com verificação de credenciais
- Sessão persistente usando localStorage
- Logout funcional

### 📋 Geração de Receitas
- Formulário para descrição de sintomas
- Validação CAPTCHA (matemática simples)
- Limitação de 3 receitas por usuário
- Geração automática de receita textual
- Histórico de receitas por usuário

### 👤 Gerenciamento de Conta
- Visualização de informações do perfil
- Histórico completo de receitas geradas
- Estatísticas de uso
- Alteração de senha
- Exportação de dados pessoais
- Exclusão de conta

### 🏥 Farmácias Parceiras
- Lista de farmácias parceiras
- Links para contato (futuro)

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Armazenamento**: localStorage (simulação de banco de dados)
- **Validação**: Regex para CPF e e-mail
- **Segurança**: Hash simples de senhas (base64)

## 📱 Design

- Interface responsiva
- Design geométrico com formas arredondadas
- Paleta de cores: Azul (#2e86de), Amarelo (#f9ca24)
- Gradientes e sombras para profundidade
- Tipografia clara e legível

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno
- Servidor local (Live Server, http-server, etc.)

### Instalação
1. Clone o repositório
2. Navegue até a pasta do projeto
3. Inicie um servidor local na pasta `frontend/screens/`
4. Acesse `login.html` no navegador

### Exemplo com Live Server (VS Code)
```bash
cd frontend/screens
# Abra o VS Code e use a extensão Live Server
# Ou use http-server:
npx http-server -p 8080
```

## 🔄 Fluxo de Uso

1. **Acesso**: Usuário acessa `login.html`
2. **Registro/Login**: Cria conta ou faz login
3. **Dashboard**: É redirecionado para `home.html`
4. **Geração**: Clica em "Gerar Nova Receita"
5. **Formulário**: Preenche sintomas e resolve CAPTCHA
6. **Receita**: Recebe receita gerada automaticamente
7. **Histórico**: Pode visualizar receitas em "Minha Conta"

## 🔒 Segurança

- Validação de CPF no formato brasileiro
- Verificação de e-mail válido
- Senhas com mínimo de 6 caracteres
- CAPTCHA para prevenir bots
- Limitação de receitas por usuário
- Sessão controlada por localStorage

## 📊 Limitações Atuais

- Frontend apenas (sem backend real)
- Armazenamento local (localStorage)
- Hash simples de senhas
- CAPTCHA matemático básico
- Receitas geradas automaticamente (sem IA médica)

## 🔮 Próximos Passos

- [ ] Implementar backend com Node.js/Express
- [ ] Banco de dados real (PostgreSQL/MongoDB)
- [ ] Hash seguro de senhas (bcrypt)
- [ ] CAPTCHA mais robusto (reCAPTCHA)
- [ ] IA para análise de sintomas
- [ ] Validação médica das receitas
- [ ] Sistema de notificações
- [ ] API para farmácias parceiras

## 👥 Contribuição

Este é um projeto demonstrativo. Para contribuições futuras:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Projeto governamental - Uso interno do estado do Paraná.

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto AutoDoc Paraná. 