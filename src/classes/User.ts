import { HasFormatter } from '../interfaces/HasFormatter.js';

export class User implements HasFormatter {
  constructor(
    readonly fullName: string,
    readonly cpf: string,
    private phone: string,
    public email: string
  ) {}

  format() {
    return `${this.fullName} |${this.cpf} | ${this.email} | ${this.phone}`;
  }
}
