// Função para enviar e-mail para cada cliente da lista
const novosVeiculos = ["Modelo A", "Modelo B", "Modelo C"];
const maisVendidos = ["Modelo X", "Modelo Y", "Modelo Z"];
const condicoesAquisicao = "Condições especiais de financiamento disponíveis.";

function enviarEmailsClientes(listaClientes) {
  listaClientes.forEach((cliente) => {
    if (cliente.marketing) {
      const corpoEmail = montarCorpoEmail(
        novosVeiculos,
        maisVendidos,
        condicoesAquisicao
      );

      const resultadoEnvio = enviarEmail(
        cliente.email,
        "Novidades da CarStore",
        corpoEmail
      );

      if (resultadoEnvio.status === "Sucesso") {
        console.log(
          `E-mail enviado para ${cliente.email}: ${resultadoEnvio.message}`
        );
      } else {
        console.error(
          `Erro ao enviar e-mail para ${cliente.email}: ${resultadoEnvio.message}`
        );
      }
    } else {
      console.log(
        `O cliente ${cliente.email} optou por não receber comunicações de marketing.`
      );
    }
  });
}

var todasAsPessoas = [];

const enviarBtn = document.getElementById("enviarBtn");

enviarBtn.addEventListener("click", function () {
  const email = document.getElementById("email").value;

  const marketing = document.getElementById("marketing").checked;

  const pessoa = {
    email: email,
    marketing: marketing,
  };

  todasAsPessoas.push(pessoa);
  console.log(todasAsPessoas);

  if (verificaDia()) {
    enviarEmailsClientes(todasAsPessoas);
  } else {
    console.log("Os emails só podem ser enviados às segundas-feiras.");
  }
});
