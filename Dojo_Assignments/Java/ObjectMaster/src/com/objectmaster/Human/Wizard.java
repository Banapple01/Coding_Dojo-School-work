package com.objectmaster.Human;

public class Wizard extends Human {
	Wizard() {
		setHealth(50);
		setIntelligence(8);
	}
	
	public void heal(Human human) {
		human.setHealth(human.getHealth() + this.getIntelligence());
	}
	
	public void fireball(Human human) {
		System.out.println(human + " was attacked! They took " + (this.getIntelligence() * 3) + " damage.");
		human.setHealth(human.getHealth() + (this.getIntelligence() * 3));
	}
}
