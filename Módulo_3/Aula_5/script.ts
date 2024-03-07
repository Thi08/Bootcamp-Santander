import { transpileModule } from "typescript";

class Conta {
  private _nomeTitular: string;
  private _saldo: number;
  private _contaAtiva: boolean;

  constructor(nomeTitular: string, saldo: number, contaAtiva: boolean) {
    this._nomeTitular = nomeTitular;
    this._saldo = saldo;
    this._contaAtiva = contaAtiva;
  }

  get nomeTitular(): string {
    return this._nomeTitular;
  }

  get saldo(): number {
    return this._saldo;
  }

  get contaAtiva(): boolean {
    return this._contaAtiva;
  }

  ativarConta(): string {
    if (!this.contaAtiva) {
      this._contaAtiva = true;
      return `Conta ativada com sucesso.`;
    }
    return `Algum erro ocorreu. Verifique se a conta está ativada.`;
  }

  inativarConta(): string {
    if (this.saldo === 0 && this.contaAtiva) {
      this._contaAtiva = false;
      return `A conta foi desativada com sucesso.`;
    }
    return `Algum erro ocorreu. Verifique se o saldo está zerado e se a conta está ativa.`;
  }

  depositar(valor: number): string {
    if (!this.contaAtiva || valor <= 0)
      return `Algum erro ocorreu. Verifique se a conta está ativa e se o valor de depósito é válido.`;
    this._saldo += valor;
    return `Depósito feito com sucesso, o novo saldo é ${this._saldo} reais.`;
  }

  sacar(valor: number): string {
    if (!this.contaAtiva || this.saldo < valor || valor <= 0)
      return `Algum erro ocorreu. Verifique se a conta está ativa, se o saldo dela é maior do que zero e se o valor de saque é válido.`;
    this._saldo -= valor;
    return `Saque feito com sucesso, o saldo restante é ${this._saldo} reais.`;
  }

  obterSaldo(): string {
    return `O saldo atual é ${this._saldo} reais.`;
  }

  transferir(valor: number, contaDestino: Conta): string {
    if (!this.contaAtiva || !contaDestino.contaAtiva || valor < 0) {
      return `Algum erro ocorreu. A conta 1 ou a conta 2 está inativa ou o valor passado é inválido.`;
    }
    if (this._saldo < 0) return `O saldo da conta 1 é melhor que zero.`;

    this._saldo -= valor;
    contaDestino._saldo += valor;
    return `Transferência realizada com sucesso. O saldo atual das contas são, respectivamente: ${this._saldo} e ${contaDestino._saldo} reais.`;
  }
}

class Pessoa {
  _nome: string;
  _idade: number;
  _cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    this._nome = nome;
    this._idade = idade;
    this._cpf = cpf;
  }

  exibirDados(): string {
    return `nome: ${this._nome}, idade: ${this._idade}, cpf: ${this._cpf}`;
  }
}

const conta1 = new Conta("Albino", 500, true);
const conta2 = new Conta("Thiago", 500, true);

console.log(conta1.transferir(200, conta2));


// console.log(conta.depositar(100))
// console.log(conta.sacar(100))
// console.log(conta.inativarConta())
// console.log(conta.ativarConta())
// console.log(conta.obterSaldo())
