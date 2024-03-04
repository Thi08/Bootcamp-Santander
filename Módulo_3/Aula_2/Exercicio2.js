// REQUISITOS:

// O saldo deve ser inicializado com zero e o atributo contaAtiva como true;

// A classe só poderá ser instanciada se o nome tiver o mínimo de 4 caracteres (não poderá receber números);

// O depositar e o sacar só poderão operar se tiver saldo disponível;

// A ação de inativar uma conta só poderá ser realizada se a conta estiver zerada e, se a mesma tiver ativa;

// Caso a operação (ativar/desativar) tenha sido realizada com exito, deverá retornar um valor booleano indicando isso;
// Faça uso de sua classe em um script;

// Em seu script, crie um array que receba todas as instâncias de conta. Antes de realizar a criação de uma nova conta, verifique se já existe um titular com mesmo nome dentro do mesmo e, só crie a conta caso não exista (dê feedback ao seu usuários sobre a criação ou não);

class Conta {
  constructor(nome) {
    if (!this.validarNome(nome)) {
      throw new Error(
        "O nome deve ter pelo menos 4 caracteres e não pode conter números."
      );
    }
    this.nome = nome;
    this.saldo = 0;
    this.contaAtiva = true;
  }

  validarNome(nome) {
    return nome.length >= 4 && !/\d/.test(nome);
  }

  depositar(valor) {
    if (!this.contaAtiva || valor <= 0) return false;
    this.saldo += valor;
    return true;
  }

  sacar(valor) {
    if (!this.contaAtiva || this.saldo < valor || valor <= 0) return false;
    this.saldo -= valor;
    return true;
  }

  inativarConta() {
    if (this.saldo === 0 && this.contaAtiva) {
      this.contaAtiva = false;
      return true;
    }
    return false;
  }

  ativarConta() {
    if (!this.contaAtiva) {
      this.contaAtiva = true;
      return true;
    }
    return false;
  }
}

const contas = [];

function criarConta(nome) {
  if (contas.some((conta) => conta.nome === nome)) {
    console.log("Já existe uma conta com esse nome.");
    return false;
  }
  try {
    const novaConta = new Conta(nome);
    contas.push(novaConta);
    console.log("Conta criada com sucesso.");
    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
}

criarConta("Thiago");
criarConta("Abc");
criarConta("Thiago");

if (contas.length > 0) {
  const contaThiago = contas.find((conta) => conta.nome === "Thiago");
  if (contaThiago) {
    console.log("Depositando R$ 1000 na conta de Thiago.");
    contaThiago.depositar(1000);
    console.log("Saldo atual: R$ " + contaThiago.saldo);
    console.log("Sacando R$ 500 da conta de Thiago.");
    contaThiago.sacar(500);
    console.log("Saldo atual: R$ " + contaThiago.saldo);
    console.log("Inativando a conta de Thiago.");
    contaThiago.inativarConta();
    console.log("Conta ativa: " + contaThiago.contaAtiva);
  }
}
