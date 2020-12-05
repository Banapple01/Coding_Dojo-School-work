package com.objectmaster.Human;

public class Ninja extends Human {
	Ninja() {
		setStealth(10);
	}
	
	public void steal(Human human) {
		System.out.println(human + " was Stealth attacked! They took " + this.getStealth() + " damage.");
		human.setHealth(human.getHealth() + (this.getStealth() * -1));
		this.setHealth(this.getHealth() + this.getStealth());
	}
	
	public void runAway() {
		this.setHealth(this.getHealth() - 10);
	}
}
