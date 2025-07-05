// Carregar informações da página home
document.addEventListener('DOMContentLoaded', () => {
  loadUserInfo();
  loadStats();
});

function loadUserInfo() {
  const user = auth.getCurrentUser();
  if (user) {
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
      userNameElement.textContent = user.nome;
    }
  }
}

function loadStats() {
  const user = auth.getCurrentUser();
  if (user) {
    const totalReceitas = auth.getReceitasCount();
    const receitasRestantes = Math.max(0, 3 - totalReceitas);
    
    const totalElement = document.getElementById('total-receitas');
    const restantesElement = document.getElementById('receitas-restantes');
    
    if (totalElement) {
      totalElement.textContent = totalReceitas;
    }
    
    if (restantesElement) {
      restantesElement.textContent = receitasRestantes;
    }
  }
} 