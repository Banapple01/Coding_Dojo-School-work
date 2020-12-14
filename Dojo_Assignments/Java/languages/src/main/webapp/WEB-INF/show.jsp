<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>${lang.name}</title>
</head>
<body>
	<h1><c:out value="${lang.name}"/></h1>
<p>creator: <c:out value="${lang.creator}"/></p>
<p>Version: <c:out value="${lang.currentVersion}"/></p>
<a href="/languages/edit/${lang.id}">Edit</a>
<a href="/languages">Dashboard</a>
<form action="/languages/${lang.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
</form>
</body>
</html>