export class Account {
    private name: string;
    private accountNumber: number;
    private balance: number;
    private static readonly DEFAULT_RATE: number = 0.05;
    private static readonly MIN_ACCOUNT_NUMBER: number = 50000;
    private static readonly MIN_NAME_LENGTH: number = 5;

    constructor(name: string, accountNumber: number, balance: number) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        if (!this.isValidData()) {
            this.name = "Default Name";
            this.accountNumber = Account.MIN_ACCOUNT_NUMBER;
            this.balance = 0;
        }
    }

    private isValidData(): boolean {
        return this.name.length >= Account.MIN_NAME_LENGTH &&
               this.accountNumber >= Account.MIN_ACCOUNT_NUMBER &&
               this.balance >= 0;
    }

    public deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }

    public withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && this.balance - amount - fee >= 0) {
            this.balance -= amount + fee;
            return true;
        }
        return false;
    }

    public addInterest(): void {
        this.balance += this.balance * Account.DEFAULT_RATE;
    }

    public transfer(acc2: Account, amount: number): boolean {
        if (this.withdraw(amount, 0)) {
            acc2.deposit(amount);
            return true;
        }
        return false;
    }

    public toString(): string {
        const formatter = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' });
        return "Name: " + this.name +
               "\nAccount Number: " + this.accountNumber +
               "\nBalance: " + formatter.format(this.balance);
    }
}

class Main {
    public static main(): void {
        const acc1 = new Account("Ted Murphy", 72354, 102.56);
        const acc2 = new Account("Jane Smith", 69713, 40.00);
        const acc3 = new Account("Edward Demsey", 93757, 759.32);

        acc1.deposit(25.85);
        acc2.deposit(500.00);
        acc2.withdraw(430.75, 1.50);
        acc3.addInterest();

        console.log(acc1.toString());
        console.log(acc2.toString());
        console.log(acc3.toString());

        acc2.transfer(acc1, 100.00);
        console.log(acc1.toString());
        console.log(acc2.toString());
    }
}

Main.main();