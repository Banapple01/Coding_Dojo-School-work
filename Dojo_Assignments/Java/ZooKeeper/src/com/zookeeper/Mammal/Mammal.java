package com.zookeeper.Mammal;

public class Mammal {
	private int energyLevel = 100;
	
	public int displayEnergy() {
		System.out.printf("Energy Level: " + getEnergyLevel());
		return getEnergyLevel();
	}

	public int getEnergyLevel() {
		return energyLevel;
	}

	public void setEnergyLevel(int energyLevelParam) {
			energyLevel = energyLevelParam;
	}

}
