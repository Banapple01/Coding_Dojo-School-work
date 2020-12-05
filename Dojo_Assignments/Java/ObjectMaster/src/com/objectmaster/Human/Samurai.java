package com.objectmaster.Human;

public class Samurai extends Human {
	public static int instances = 0;
	Samurai() {
		instances++;
		setHealth(200);
	}
	
	public void deathBlow(Human human) {
		human.setHealth(0);
		this.setHealth(this.getHealth()/2);
	}
	
	public void meditate() {
		this.setHealth(this.getHealth() + (this.getHealth()/2));
	}
	
	public int howMany() {
		return instances;
	}
}
