import { BankType, AccountType } from './types';

/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param id - account id
     * @returns - true if account id ezists, false otherwise
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    private isUsernameExisits(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * 
     * @param username 
     * @param age 
     * @param accountNumber 
     * @returns a new account with a ten-digit unique id and zero balance
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if(!this.isUsernameExisits(username)) {
            throw new Error('User not found');
        }
        if(age < 18) {
            throw new Error('User is under 18');
        }
        if(this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposit money into an account
     * @param accountNumber - the account to deposit into
     * @param amount - the amount to deposit
     * @returns the updated account
     * @throws Error if account not found or amount is invalid
     */
    deposit(accountNumber: number, amount: number): AccountType {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }

        const account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }

        account.balance += amount;
        return account;
    }

    /**
     * Withdraw money from an account
     * @param accountNumber - the account to withdraw from
     * @param amount - the amount to withdraw
     * @returns the updated account
     * @throws Error if account not found, amount is invalid, or insufficient funds
     */
    withdraw(accountNumber: number, amount: number): AccountType {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }

        const account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }

        if (account.balance < amount) {
            throw new Error('Insufficient funds');
        }

        account.balance -= amount;
        return account;
    }

    /**
     * Check the balance of an account
     * @param accountNumber - the account to check
     * @returns the current balance
     * @throws Error if account not found
     */
    getBalance(accountNumber: number): number {
        const account = this.findAccountById(accountNumber);
        if (!account) {
            throw new Error('Account not found');
        }

        return account.balance;
    }
}