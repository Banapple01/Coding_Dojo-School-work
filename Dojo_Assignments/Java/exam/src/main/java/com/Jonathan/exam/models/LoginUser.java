package com.Jonathan.exam.models;

import javax.validation.constraints.NotEmpty;

public class LoginUser {
	@NotEmpty(message="email required")
	private String email;
	@NotEmpty(message="password required")
	private String password;
	
	public LoginUser() {
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
