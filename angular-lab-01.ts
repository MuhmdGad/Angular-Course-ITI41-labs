//class account
class Account {
  accountNumber: number;
  accountBalance: number;

  constructor(_acc_num: number = 10, _acc_balance: number = 8000) {
    this.accountNumber = _acc_num;
    this.accountBalance = _acc_balance;
  }

  DebitAmount() {
    // some code
  }

  creditAmount() {
    // some code
  }

  getBalance() {
    // some code
  }
}

interface IAccount {
  OpeningDate: string;

  AddCustomer();
  RemoveCustomer();
}
class CurrentAccount extends Account implements IAccount {
  OpeningDate: string;
  InterestRate: number;

  constructor(
    _acc_number: number,
    _acc_balance: number,
    _opening_date: string,
    _interest_rate: number
  ) {
    super(_acc_number, _acc_balance);
    this.OpeningDate = _opening_date;
    this.InterestRate = _interest_rate;
  }

  AddCustomer() {
    //some code
  }
  RemoveCustomer() {
    //some code
  }
}

class SavingAccount extends Account implements IAccount {
  OpeningDate: string;
  MinBalance: string;
  InterestRate: number;

  constructor(
    _acc_number: number,
    _acc_balance: number,
    _opening_date: string,
    _min_balance: string
  ) {
    super(_acc_number, _acc_balance);
    this.OpeningDate = _opening_date;
    this.MinBalance = _min_balance;
  }

  AddCustomer() {
    //some code
  }
  RemoveCustomer() {
    //some code
  }
}
