class MyBank {
  id: number;
  private _amount: number;
  name: string;

  constructor(id: number, amount: number, name: string) {
    this.id = id;
    this._amount = amount;
    this.name = name;
  }
}

const bank = new MyBank(12, 5004, "Nayim Hossen");
console.log(bank);
