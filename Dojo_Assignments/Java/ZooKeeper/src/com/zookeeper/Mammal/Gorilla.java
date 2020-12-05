package com.zookeeper.Mammal;

public class Gorilla extends Mammal {
	Gorilla() {
		setEnergyLevel(200);
	}
	
	public void throwSomething() {
		System.out.println("The Gorilla threw something!");
		setEnergyLevel(getEnergyLevel() - 5);
	}
	
	public void eatBananas() {
		System.out.println("The Gorilla ate a Banana.");
		setEnergyLevel(getEnergyLevel() + 10);
	}
	
	public void climb() {
		System.out.println("The Gorilla climbed a tree.");
		setEnergyLevel(getEnergyLevel() - 10);
	}
}
