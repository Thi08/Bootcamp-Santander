function montarCorpoEmail(novosVeiculos, maisVendidos, condicoesAquisicao) {
  let corpoEmail = `
      Olá,

      Confira as últimas novidades da CarStore!

      Novos veículos disponíveis:
      ${novosVeiculos.join("\n")}

      Veículos mais vendidos:
      ${maisVendidos.join("\n")}

      Condições especiais de aquisição:
      ${condicoesAquisicao}

      Atenciosamente,
      Equipe CarStore
  `;

  return corpoEmail;
}
