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
}

const conta = new Conta("Thiago", 0, true);
console.log(conta);

// console.log(conta.depositar(100))
// console.log(conta.sacar(100))
// console.log(conta.inativarConta())
// console.log(conta.ativarConta())
// console.log(conta.obterSaldo())
