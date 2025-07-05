// Carregar informações da página conta
document.addEventListener('DOMContentLoaded', () => {
  loadProfileInfo();
  loadReceitasHistory();
  loadReceitasStats();
});

function loadProfileInfo() {
  const user = auth.getCurrentUser();
  if (user) {
    document.getElementById('profile-nome').textContent = user.nome;
    document.getElementById('profile-cpf').textContent = user.cpf;
    document.getElementById('profile-email').textContent = user.email;
    
    const dataCadastro = new Date(user.dataCadastro);
    document.getElementById('profile-data').textContent = dataCadastro.toLocaleDateString('pt-BR');
  }
}

function loadReceitasStats() {
  const user = auth.getCurrentUser();
  if (user) {
    const totalReceitas = auth.getReceitasCount();
    const receitasRestantes = Math.max(0, 3 - totalReceitas);
    
    document.getElementById('total-receitas-historico').textContent = totalReceitas;
    document.getElementById('receitas-restantes-historico').textContent = receitasRestantes;
  }
}

function loadReceitasHistory() {
  const receitas = auth.getReceitas();
  const receitasList = document.getElementById('receitas-list');
  
  if (receitas.length === 0) {
    receitasList.innerHTML = '<p>Nenhuma receita gerada ainda.</p>';
    return;
  }
  
  let html = '';
  receitas.forEach((receita, index) => {
    const data = new Date(receita.data);
    html += `
      <div class="receita-item">
        <h4>Receita #${index + 1}</h4>
        <p><strong>Data:</strong> ${data.toLocaleDateString('pt-BR')} ${data.toLocaleTimeString('pt-BR')}</p>
        <p><strong>Sintomas:</strong> ${receita.sintomas}</p>
        <pre>${receita.texto}</pre>
      </div>
    `;
  });
  
  receitasList.innerHTML = html;
}

// Funções de configurações
function alterarSenha() {
  const novaSenha = prompt('Digite sua nova senha (mínimo 6 caracteres):');
  if (novaSenha && novaSenha.length >= 6) {
    const confirmarSenha = prompt('Confirme a nova senha:');
    if (novaSenha === confirmarSenha) {
      const user = auth.getCurrentUser();
      if (user) {
        user.senha = btoa(novaSenha);
        auth.users[user.cpf] = user;
        localStorage.setItem('users', JSON.stringify(auth.users));
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Senha alterada com sucesso!');
      }
    } else {
      alert('As senhas não coincidem!');
    }
  } else if (novaSenha) {
    alert('A senha deve ter pelo menos 6 caracteres!');
  }
}

function exportarDados() {
  const user = auth.getCurrentUser();
  if (user) {
    const dados = {
      nome: user.nome,
      cpf: user.cpf,
      email: user.email,
      dataCadastro: user.dataCadastro,
      receitas: user.receitas
    };
    
    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `autodoc_dados_${user.cpf}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    alert('Dados exportados com sucesso!');
  }
}

function excluirConta() {
  const confirmacao = confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');
  if (confirmacao) {
    const user = auth.getCurrentUser();
    if (user) {
      delete auth.users[user.cpf];
      localStorage.setItem('users', JSON.stringify(auth.users));
      localStorage.removeItem('currentUser');
      alert('Conta excluída com sucesso!');
      window.location.href = 'login.html';
    }
  }
} 