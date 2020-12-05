package com.zookeeper.Mammal;

public class Bat extends Mammal {
	Bat() {
		setEnergyLevel(300);
	}
	
	public void fly() {
		System.out.println("Bat taking off sounds");
		setEnergyLevel(getEnergyLevel() - 50);
	}
	
	public void eatHumans() {
		setEnergyLevel(getEnergyLevel() + 25);
	}
	
	public void attackTown() {
		System.out.println("Fire noises");
		setEnergyLevel(getEnergyLevel() - 100);
	}
}
