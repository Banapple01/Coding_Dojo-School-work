class User:
    def __init__(self, name):
        self.name = name
        self.account = BankAccount(int_rate=0.02, balance=0)

#adding the deposit method
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print("User:", self.name, "Account-balance: ", self.account.balance)
        return self

    def transfer_money(self, other_user, amount):
        self.account.balance -= amount
        other_user.account.balance += amount
        return self


class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = 0.09
        self.balance = 0

    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def yield_interest(self):
        self.int_rate = 0.09 * self.balance
        return self

bob = User("bob")
billy = User("billy")
joe = User("joe")

bob.make_deposit(20).make_deposit(500).make_deposit(30).make_withdrawal(40).display_user_balance()

billy.make_deposit(74).make_deposit(36).make_withdrawal(20).make_withdrawal(13).display_user_balance()

joe.make_deposit(900).make_withdrawal(235).make_withdrawal(37).make_withdrawal(67).display_user_balance()

bob.transfer_money(joe, 100).display_user_balance()
joe.display_user_balance()

