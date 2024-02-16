function verificaDia() {
  const diaAtual = new Date().getDay();
  const diaSemana = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];

  if (diaSemana[diaAtual] === "segunda") {
    return true;
  } else {
    return false;
  }
}
