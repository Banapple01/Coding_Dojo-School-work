package com.bankaccount.BankAccount;

import java.util.Random;

public class BankAccount {
	private String acntNum;
	private double checkingBalance;
	private double savingsBalance;
	private static Integer numOfAccounts = 0;
	private static double totalCollectiveCash = 0;
	
	BankAccount() {
		acntNum = randAccNum();
		numOfAccounts++;
	}
	
	private String randAccNum() {
		Random rand = new Random();
		String randy = String.valueOf((rand.nextDouble() * 999999999) + 1000000000);
		return randy;
	}
	
	public double getCheckingBalance() {
		return checkingBalance;
	}
	
	public double getSavingsBalance() {
		return savingsBalance;
	}
	
	public void depositMoneys(double val, int accnt) {
		if (accnt == 1) {
			checkingBalance += val;
			totalCollectiveCash += val;
			System.out.println("moneys added to checking");
		} else {
			if (accnt == 2) {
			savingsBalance += val;
			totalCollectiveCash += val;
			System.out.println("moneys added to savings");
			}
		}
	}
	
	public void withdrawMoneys(double val, int accnt) {
		if (accnt == 1 && checkingBalance >= val) {
			checkingBalance += val;
			totalCollectiveCash += val;
			System.out.println("moneys added to checking");
		} else {
			if (accnt == 2 && savingsBalance >= val) {
			savingsBalance += val;
			totalCollectiveCash += val;
			System.out.println("moneys added to savings");
			}
		}
	}
	
	public double totalmoneys() {
		return checkingBalance + savingsBalance;
	}
}
