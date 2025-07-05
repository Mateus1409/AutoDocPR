# AutoDoc Paraná - Frontend

Esta pasta contém todas as páginas HTML e assets necessários para executar o sistema AutoDoc Paraná.

## 🚀 Como Executar

### Opção 1: Python (Recomendado)
```bash
cd frontend/screens
python3 -m http.server 8080
```
Acesse: http://localhost:8080/login.html

### Opção 2: Node.js
```bash
cd frontend/screens
npx http-server -p 8080
```
Acesse: http://localhost:8080/login.html

### Opção 3: Live Server (VS Code)
1. Abra a pasta `frontend/screens` no VS Code
2. Instale a extensão "Live Server"
3. Clique com botão direito em `login.html`
4. Selecione "Open with Live Server"

## 📁 Arquivos

### Páginas HTML
- `login.html` - Página de login/registro (página inicial)
- `home.html` - Dashboard principal
- `conta.html` - Gerenciamento de conta
- `index.html` - Geração de receitas
- `about.html` - Sobre o projeto
- `pharmacies.html` - Farmácias parceiras
- `test.html` - Página de teste

### Assets
- `style.css` - Estilos principais
- `auth.js` - Sistema de autenticação
- `home.js` - Lógica da página home
- `conta.js` - Lógica da página conta
- `script.js` - Lógica de geração de receitas

## 🔧 Solução de Problemas

### CSS não carrega
- Verifique se o arquivo `style.css` está na mesma pasta
- Use o navegador F12 para verificar erros no console
- Teste a página `test.html` primeiro

### JavaScript não funciona
- Verifique se os arquivos `.js` estão na mesma pasta
- Abra o console do navegador (F12) para ver erros
- Teste a página `test.html`

### Página em branco
- Certifique-se de estar executando um servidor local
- Não abra os arquivos diretamente no navegador (file://)
- Use sempre http://localhost:8080

## 📱 Teste

1. Acesse http://localhost:8080/test.html
2. Se você vê cores e estilos, o CSS está funcionando
3. Clique no botão para testar JavaScript
4. Se tudo estiver OK, acesse http://localhost:8080/login.html

## 🔄 Fluxo de Uso

1. Acesse `login.html`
2. Crie uma conta ou faça login
3. Navegue pelas páginas do sistema
4. Gere receitas e veja o histórico 