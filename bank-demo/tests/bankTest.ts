import { Bank } from '../src/bank';

const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// Account Creation Tests
console.log('\nTesting Account Creation Functionality:');

// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

// Scenario 2: unsuccessful account creation due to customer being below 18

try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// Deposit Tests
console.log('\nTesting Deposit Functionality:');

// Scenario 1: successful deposit
try {
    const updatedAccount = bank.deposit(1234567890, 1000);
    if (updatedAccount.balance === 6000) {
        console.log('Deposit Scenario 1 passed');
    } else {
        console.log('Deposit Scenario 1 failed');
    }
} catch(e: any) {
    console.log('Deposit Scenario 1 failed');
}

// Scenario 2: unsuccessful deposit due to no existing account
try {
    bank.deposit(9999999999, 1000);
    console.log('Deposit Scenario 2 failed');
} catch(e: any) {
    if (e.message === 'Account not found') {
        console.log('Deposit Scenario 2 passed');
    } else {
        console.log('Deposit Scenario 2 failed');
    }
}

// Withdrawal Tests
console.log('\nTesting Withdrawal Functionality:');

// Scenario 1: successful withdrawal
try {
    const updatedAccount = bank.withdraw(1234567890, 1000);
    if (updatedAccount.balance === 5000) {
        console.log('Withdrawal Scenario 1 passed');
    } else {
        console.log('Withdrawal Scenario 1 failed');
    }
} catch(e: any) {
    console.log('Withdrawal Scenario 1 failed');
}

// Scenario 2: unsuccessful withdrawal due to no existing account
try {
    bank.withdraw(9999999999, 1000);
    console.log('Withdrawal Scenario 2 failed');
} catch(e: any) {
    if (e.message === 'Account not found') {
        console.log('Withdrawal Scenario 2 passed');
    } else {
        console.log('Withdrawal Scenario 2 failed');
    }
}

// Scenario 3: unsuccessful withdrawal due to insufficient funds
try {
    bank.withdraw(1234567890, 10000);
    console.log('Withdrawal Scenario 3 failed');
} catch(e: any) {
    if (e.message === 'Insufficient funds') {
        console.log('Withdrawal Scenario 3 passed');
    } else {
        console.log('Withdrawal Scenario 3 failed');
    }
}

// Balance Check Tests
console.log('\nTesting Balance Check Functionality:');

// Scenario 1: successful balance check
try {
    const balance = bank.getBalance(1234567890);
    if (balance === 5000) {
        console.log('Balance Check Scenario 1 passed');
    } else {
        console.log('Balance Check Scenario 1 failed');
    }
} catch(e: any) {
    console.log('Balance Check Scenario 1 failed');
}

// Scenario 2: unsuccessful balance check due to no existing account
try {
    bank.getBalance(9999999999);
    console.log('Balance Check Scenario 2 failed');
} catch(e: any) {
    if (e.message === 'Account not found') {
        console.log('Balance Check Scenario 2 passed');
    } else {
        console.log('Balance Check Scenario 2 failed');
    }
}