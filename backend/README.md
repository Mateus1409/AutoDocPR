# Backend - AutoDoc Paraná

Esta pasta está reservada para a implementação futura do backend do sistema AutoDoc Paraná.

## 🚧 Status Atual

O backend ainda não foi implementado. O sistema atual funciona apenas com frontend e localStorage.

## 🔮 Implementação Futura

### Tecnologias Planejadas
- **Runtime**: Node.js
- **Framework**: Express.js
- **Banco de Dados**: PostgreSQL ou MongoDB
- **Autenticação**: JWT (JSON Web Tokens)
- **Validação**: Joi ou Yup
- **Hash de Senhas**: bcrypt
- **API**: RESTful

### Estrutura Proposta
```
backend/
├── src/
│   ├── controllers/     # Controladores das rotas
│   ├── models/         # Modelos do banco de dados
│   ├── routes/         # Definição das rotas
│   ├── middleware/     # Middlewares (auth, validação)
│   ├── services/       # Lógica de negócio
│   ├── utils/          # Utilitários
│   └── config/         # Configurações
├── tests/              # Testes unitários e integração
├── docs/               # Documentação da API
└── package.json
```

### Funcionalidades Planejadas

#### 🔐 Autenticação e Autorização
- Registro de usuários com validação robusta
- Login com JWT
- Refresh tokens
- Middleware de autenticação
- Controle de sessões

#### 📋 Gerenciamento de Receitas
- CRUD completo de receitas
- Validação médica (futuro)
- Histórico detalhado
- Limites por usuário
- Exportação de dados

#### 🏥 Integração com Farmácias
- API para farmácias parceiras
- Sistema de notificações
- Geolocalização
- Status de disponibilidade

#### 📊 Relatórios e Analytics
- Estatísticas de uso
- Relatórios governamentais
- Dashboard administrativo
- Métricas de performance

#### 🔒 Segurança
- Rate limiting
- CORS configurado
- Validação de entrada
- Sanitização de dados
- Logs de auditoria

### Endpoints Planejados

#### Autenticação
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

#### Usuários
```
GET /api/users/profile
PUT /api/users/profile
PUT /api/users/password
DELETE /api/users/account
```

#### Receitas
```
GET /api/prescriptions
POST /api/prescriptions
GET /api/prescriptions/:id
PUT /api/prescriptions/:id
DELETE /api/prescriptions/:id
```

#### Farmácias
```
GET /api/pharmacies
GET /api/pharmacies/:id
GET /api/pharmacies/nearby
```

### Banco de Dados

#### Tabelas Principais
- `users` - Usuários do sistema
- `prescriptions` - Receitas geradas
- `pharmacies` - Farmácias parceiras
- `sessions` - Sessões ativas
- `audit_logs` - Logs de auditoria

### Configuração de Ambiente

```bash
# Instalação
npm install

# Variáveis de ambiente
cp .env.example .env

# Migração do banco
npm run migrate

# Seed inicial
npm run seed

# Desenvolvimento
npm run dev

# Produção
npm start
```

### Testes

```bash
# Testes unitários
npm run test

# Testes de integração
npm run test:integration

# Cobertura
npm run test:coverage
```

## 📝 Notas de Desenvolvimento

- Priorizar segurança e validação
- Implementar logs detalhados
- Documentar todas as APIs
- Criar testes abrangentes
- Seguir padrões REST
- Implementar rate limiting
- Configurar CORS adequadamente

## 🔗 Integração com Frontend

O frontend atual será adaptado para consumir as APIs do backend, substituindo o localStorage por chamadas HTTP autenticadas. 