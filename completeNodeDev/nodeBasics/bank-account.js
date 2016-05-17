var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
}
function getAccount(userName) {
	var matchedAccount;
	for(var i=0;i<accounts.length;i++) {
		if(accounts[i].userName === userName) {
			matchedAccount = accounts[i];
		}
	}
	
	return matchedAccount;
}
function deposit(amount, account) {
	if(typeof amount === 'number') {
		account.balance+=amount;
		// console.log('$'+account.balance + " deposited");
	} else {
			console.log("Deposit failed, amount is not a valid number");
	}
	
}
function withdraw(amount, account) {
	if(typeof amount === 'number') {
		if (account.balance >= amount) {
			account.balance -= amount;
			// console.log('$'+amount+ " withdrawn");
		} else {
			console.log("You don't have enough money to withdraw $" + amount+ "!");
		}
	} else {
		console.log("Deposit failed, amount is not a valid number");
	}
	
}
function getBalance(account) {
	console.log("You're balance is $" + account.balance);
}

function createBalanceGetter(account) {
	return function() {
		return account.balance;
	}
}

var bob = createAccount({
	userName:'bob',
	balance:100
});
getBalance(bob);
deposit(20,bob);
withdraw(150,bob);
getBalance(bob);

var bob2 = getAccount('bob');
var getBob2Balance = createBalanceGetter(bob2);
console.log(getBob2Balance());