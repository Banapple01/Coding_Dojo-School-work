<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>show</title>
</head>
<body>
<form:form action="/shows/${show.id}/edit" method="post" modelAttribute="shows">
    <p>
        <form:label path="title">Title</form:label>
        <form:errors path="title"/>
        <form:input path="title" value="${show.title}"/>
    </p>
    <p>
        <form:label path="network">Network</form:label>
        <form:errors path="network"/>
        <form:input path="network" value="${show.network}"/>
    </p>   
    <input type="submit" value="update"/>
</form:form>
	<a href="/shows/${show.id}/delete">Delete</a>
</body>
</html>