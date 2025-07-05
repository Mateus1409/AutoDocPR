// Verificar se usuário está logado
if (!auth.isLoggedIn()) {
  window.location.href = 'login.html';
}

// Função utilitária para validar CPF (formato simples)
function validarCPF(cpf) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

// Geração simples de CAPTCHA
function gerarCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return {
    pergunta: `Quanto é ${a} + ${b}?`,
    resposta: (a + b).toString()
  };
}

// Limite de receitas por usuário
const LIMITE_RECEITAS = 3;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-receita');
  const cpfInput = document.getElementById('cpf');
  const sintomasInput = document.getElementById('sintomas');
  const captchaContainer = document.getElementById('captcha-container');
  const receitaSection = document.getElementById('receita-gerada');
  const receitaTexto = document.getElementById('receita-texto');

  let captcha = gerarCaptcha();
  captchaContainer.innerHTML = `
    <label>${captcha.pergunta}</label>
    <input type="text" id="captcha-resposta" required placeholder="Resposta">
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sintomas = sintomasInput.value.trim();
    const captchaResposta = document.getElementById('captcha-resposta').value.trim();
    const user = auth.getCurrentUser();

    if (auth.getReceitasCount() >= LIMITE_RECEITAS) {
      alert('Limite de receitas atingido para este usuário.');
      return;
    }
    if (captchaResposta !== captcha.resposta) {
      alert('CAPTCHA incorreto. Tente novamente.');
      // Gera novo captcha
      captcha = gerarCaptcha();
      captchaContainer.innerHTML = `
        <label>${captcha.pergunta}</label>
        <input type="text" id="captcha-resposta" required placeholder="Resposta">
      `;
      return;
    }
    if (!sintomas) {
      alert('Descreva seus sintomas.');
      sintomasInput.focus();
      return;
    }
    
    // Gera receita textual simples
    const receitaTexto = `Receita Médica
----------------------
Paciente: ${user.nome}
CPF: ${user.cpf}
Sintomas relatados: ${sintomas}

Prescrição sugerida: 
- Paracetamol 500mg, 1 comprimido a cada 8h por 3 dias
- Beber bastante água e repousar

*** Esta receita é gerada automaticamente e deve ser validada por um profissional de saúde. ***`;
    
    document.getElementById('receita-texto').textContent = receitaTexto;
    document.getElementById('receita-gerada').style.display = 'block';
    
    // Salvar receita no histórico do usuário
    auth.addReceita({
      sintomas: sintomas,
      texto: receitaTexto
    });
    
    // Gera novo captcha para próxima vez
    captcha = gerarCaptcha();
    captchaContainer.innerHTML = `
      <label>${captcha.pergunta}</label>
      <input type="text" id="captcha-resposta" required placeholder="Resposta">
    `;
    form.reset();
  });
}); 