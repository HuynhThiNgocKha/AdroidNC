"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, accountNumber, balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        if (!this.isValidData()) {
            this.name = "Default Name";
            this.accountNumber = Account.MIN_ACCOUNT_NUMBER;
            this.balance = 0;
        }
    }
    Account.prototype.isValidData = function () {
        return this.name.length >= Account.MIN_NAME_LENGTH &&
            this.accountNumber >= Account.MIN_ACCOUNT_NUMBER &&
            this.balance >= 0;
    };
    Account.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    };
    Account.prototype.withdraw = function (amount, fee) {
        if (amount > 0 && this.balance - amount - fee >= 0) {
            this.balance -= amount + fee;
            return true;
        }
        return false;
    };
    Account.prototype.addInterest = function () {
        this.balance += this.balance * Account.DEFAULT_RATE;
    };
    Account.prototype.transfer = function (acc2, amount) {
        if (this.withdraw(amount, 0)) {
            acc2.deposit(amount);
            return true;
        }
        return false;
    };
    Account.prototype.toString = function () {
        var formatter = new Intl.NumberFormat("vi-VN", { style: 'currency', currency: 'VND' });
        return "Name: " + this.name +
            "\nAccount Number: " + this.accountNumber +
            "\nBalance: " + formatter.format(this.balance);
    };
    Account.DEFAULT_RATE = 0.05;
    Account.MIN_ACCOUNT_NUMBER = 50000;
    Account.MIN_NAME_LENGTH = 5;
    return Account;
}());
exports.Account = Account;
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var acc1 = new Account("Ted Murphy", 72354, 102.56);
        var acc2 = new Account("Jane Smith", 69713, 40.00);
        var acc3 = new Account("Edward Demsey", 93757, 759.32);
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
    };
    return Main;
}());
Main.main();
