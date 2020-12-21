<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Show</title>
</head>
<body>
<form:form action="/shows/${show.id}/edit" method="post" modelAttribute="show">
    <p>
        <form:label path="title">Title</form:label>
        <form:input path="title" placeholder="${show.title}"/>
        <form:errors path="title"/>
    </p>
    <p>
        <form:label path="network">Network</form:label>
        <form:input path="network" placeholder="${show.network}"/>
        <form:errors path="network"/>
    </p>   
    <input type="submit" value="update"/>
</form:form>
	<a href="/shows/${show.id}/delete">Delete</a>
</body>
</html>