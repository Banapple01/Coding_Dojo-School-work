package com.objectmaster.Human;

public class HumanTest{

	public static void main(String[] args) {
		Human humanOne = new Human();
		Human humantwo = new Human();
		
		humanOne.attack(humantwo);
		System.out.println(humantwo.getHealth());
	}

}
