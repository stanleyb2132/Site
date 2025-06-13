function validar() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || assunto === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }

  if (telefone && !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
    alert("Formato de telefone inválido. Use (99) 99999-9999");
    return false;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  return true;
}
