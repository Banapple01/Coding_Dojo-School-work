<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Submitted Info</h1>
	<label>Name: <c:out value="${name}"/></label>
	<label>Dojo Location: <c:out value="${dl}"/></label>
	<label>Favorite Language: <c:out value="${fl}"/></label>
	<label>Comment: <c:out value="${comment}"/></label>
	<button onClick="window.location.href='/'">Go Back</button> // button redirect
</body>
</html>