class Person {
  private _firstName = "";
  public enumerable: true;
  public configurable: true;

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value.toUpperCase();
  }
}

const p = new Person();
p.firstName = "Asaad";
console.log(p.firstName);