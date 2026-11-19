
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0 || !Number.isFinite(amount)) {
            throw new Error("Deposit amount must be positive.");
        }

        this.#balance += amount;
        console.log("Amount deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= 0 || !Number.isFinite(amount)) {
            throw new Error("Withdrawal amount must be positive.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;
        console.log("Amount withdrawn:", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

// Creating bank account
const account1 = new BankAccount(5000);

try {
    account1.deposit(2000);
    console.log("Current Balance:", account1.getBalance());

    account1.withdraw(1000);
    console.log("Current Balance:", account1.getBalance());

} catch (error) {
    console.log("Bank Error:", error.message);
}

// Invalid withdrawal
try {
    account1.withdraw(10000);
} catch (error) {
    console.log("Bank Error:", error.message);
}

console.log("Final Balance:", account1.getBalance());
