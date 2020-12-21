<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Shows</title>
</head>
<body>
<form:form action="/shows/new" method="post" modelAttribute="show">
    <p>
        <form:label path="title">Title</form:label>
        <form:errors path="title"/>
        <form:input path="title"/>
    </p>
    <p>
        <form:label path="network">Network</form:label>
        <form:errors path="network"/>
        <form:input path="network"/>
    </p>   
    <input type="submit" value="Create"/>
</form:form> 
</body>
</html>