// Sistema de autenticação usando localStorage
class AuthSystem {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || {};
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  }

  // Registrar novo usuário
  register(userData) {
    const { nome, cpf, email, senha } = userData;
    
    // Validações
    if (!nome || !cpf || !email || !senha) {
      throw new Error('Todos os campos são obrigatórios');
    }
    
    if (!this.validarCPF(cpf)) {
      throw new Error('CPF inválido');
    }
    
    if (!this.validarEmail(email)) {
      throw new Error('E-mail inválido');
    }
    
    if (senha.length < 6) {
      throw new Error('Senha deve ter pelo menos 6 caracteres');
    }
    
    // Verificar se CPF já existe
    if (this.users[cpf]) {
      throw new Error('CPF já cadastrado');
    }
    
    // Criar usuário
    const user = {
      nome,
      cpf,
      email,
      senha: this.hashPassword(senha),
      dataCadastro: new Date().toISOString(),
      receitas: []
    };
    
    this.users[cpf] = user;
    localStorage.setItem('users', JSON.stringify(this.users));
    
    return user;
  }

  // Fazer login
  login(cpf, senha) {
    const user = this.users[cpf];
    
    if (!user) {
      throw new Error('CPF não encontrado');
    }
    
    if (user.senha !== this.hashPassword(senha)) {
      throw new Error('Senha incorreta');
    }
    
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    return user;
  }

  // Fazer logout
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  }

  // Verificar se usuário está logado
  isLoggedIn() {
    return this.currentUser !== null;
  }

  // Obter usuário atual
  getCurrentUser() {
    return this.currentUser;
  }

  // Adicionar receita ao histórico
  addReceita(receita) {
    if (!this.currentUser) return;
    
    const user = this.users[this.currentUser.cpf];
    user.receitas.push({
      ...receita,
      data: new Date().toISOString()
    });
    
    this.currentUser = user;
    this.users[this.currentUser.cpf] = user;
    
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Obter histórico de receitas
  getReceitas() {
    return this.currentUser ? this.currentUser.receitas : [];
  }

  // Contar receitas do usuário
  getReceitasCount() {
    return this.currentUser ? this.currentUser.receitas.length : 0;
  }

  // Utilitários
  validarCPF(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
  }

  validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  hashPassword(password) {
    // Hash simples para demonstração (em produção usar bcrypt)
    return btoa(password);
  }
}

// Instância global do sistema de autenticação
const auth = new AuthSystem();

// Funções globais
function showTab(tabName) {
  // Esconder todas as abas
  document.querySelectorAll('.auth-form').forEach(form => {
    form.style.display = 'none';
  });
  
  // Remover classe active de todos os botões
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Mostrar aba selecionada
  document.getElementById(tabName + '-tab').style.display = 'block';
  
  // Adicionar classe active ao botão
  event.target.classList.add('active');
}

function logout() {
  auth.logout();
}

// Verificar autenticação em todas as páginas
function checkAuth() {
  if (!auth.isLoggedIn()) {
    window.location.href = 'login.html';
  }
}

// Inicialização quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  // Se estiver na página de login, não verificar autenticação
  if (window.location.pathname.includes('login.html')) {
    setupLoginForms();
    return;
  }
  
  // Verificar autenticação em outras páginas
  checkAuth();
});

// Configurar formulários de login e registro
function setupLoginForms() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const cpf = document.getElementById('login-cpf').value;
      const senha = document.getElementById('login-senha').value;
      
      try {
        const user = auth.login(cpf, senha);
        alert('Login realizado com sucesso!');
        window.location.href = 'home.html';
      } catch (error) {
        alert(error.message);
      }
    });
  }
  
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nome = document.getElementById('register-nome').value;
      const cpf = document.getElementById('register-cpf').value;
      const email = document.getElementById('register-email').value;
      const senha = document.getElementById('register-senha').value;
      const confirmarSenha = document.getElementById('register-confirmar-senha').value;
      
      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem');
        return;
      }
      
      try {
        const user = auth.register({ nome, cpf, email, senha });
        alert('Conta criada com sucesso! Faça login para continuar.');
        
        // Limpar formulário e mostrar aba de login
        registerForm.reset();
        showTab('login');
      } catch (error) {
        alert(error.message);
      }
    });
  }
} 