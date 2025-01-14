// Define the Account class
class Account {
    private balance: number;
  
    constructor(initialBalance: number = 0) {
      if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative.");
      }
      this.balance = initialBalance;
    }
  
    // Method to deposit money
    deposit(amount: number): void {
      if (amount <= 0) {
        throw new Error("Deposit amount must be greater than zero.");
      }
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    // Method to withdraw money
    withdraw(amount: number): void {
      if (amount <= 0) {
        throw new Error("Withdrawal amount must be greater than zero.");
      }
      if (amount > this.balance) {
        throw new Error("Insufficient funds.");
      }
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
  
    // Method to get the current balance
    getBalance(): number {
      console.log(`Current balance: $${this.balance}`);
      return this.balance;
    }
  }
  
  // Example usage
  const myAccount = new Account(100); // Create account with initial balance of $100
  
  myAccount.deposit(50);   // Deposits $50, balance should be $150
  myAccount.withdraw(30);  // Withdraws $30, balance should be $120
  myAccount.getBalance();  // Checks balance, should log $120
  
  // Export the Account class for testing purposes
  export default Account;
  