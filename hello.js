"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the Account class
var Account = /** @class */ (function () {
    function Account(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative.");
        }
        this.balance = initialBalance;
    }
    // Method to deposit money
    Account.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        this.balance += amount;
        console.log("Deposited $".concat(amount, ". New balance: $").concat(this.balance));
    };
    // Method to withdraw money
    Account.prototype.withdraw = function (amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
        console.log("Withdrew $".concat(amount, ". New balance: $").concat(this.balance));
    };
    // Method to get the current balance
    Account.prototype.getBalance = function () {
        console.log("Current balance: $".concat(this.balance));
        return this.balance;
    };
    return Account;
}());
// Example usage
var myAccount = new Account(100); // Create account with initial balance of $100
myAccount.deposit(50); // Deposits $50, balance should be $150
myAccount.withdraw(30); // Withdraws $30, balance should be $120
myAccount.getBalance(); // Checks balance, should log $120
// Export the Account class for testing purposes
exports.default = Account;
