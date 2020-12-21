<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login/Reg</title>
</head>
<body>
	<h1>Login</h1>
	    <p><c:out value="${error}" /></p>
	    <form:form method="post" action="/login" modelAttribute="loginUser">
	        <p>
	            <label for="email">Email</label>
	            <form:input path="email" type="text" name="email"/>
	            <form:errors path="email"/>
	        </p>
	        <p>
	            <label for="password">Password</label>
	            <form:input path="password" type="password" id="password" name="password"/>
	            <form:errors path="password"/>
	        </p>
	        <input type="submit" value="Login!"/>
	    </form:form> 
	    
	    <h1>Register!</h1>
	    <form:form method="POST" action="/registration" modelAttribute="registeringUser">
	    	<p>
	            <form:label path="name">Name:</form:label>
	            <form:input type="name" path="name"/>
	            <form:errors path="name"/>
	        </p>
	        <p>
	            <form:label path="email">Email:</form:label>
	            <form:input type="email" path="email"/>
	            <form:errors path="email"/>
	        </p>
	        <p>
	            <form:label path="password">Password:</form:label>
	            <form:password path="password"/>
	            <form:errors path="password"/>
	        </p>
	        <p>
	            <form:label path="passwordConfirmation">Password Confirmation:</form:label>
	            <form:password path="passwordConfirmation"/>
	            <form:errors path="passwordConfirmation"/>
	        </p>
	        <input type="submit" value="Register!"/>
	    </form:form>
</body>
</html>