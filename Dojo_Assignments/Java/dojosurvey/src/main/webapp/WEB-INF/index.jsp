<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojo Survey</title>
</head>
<body>
	<p><c:out value="${error}"/></p>
	<form method="POST" action="/result">
		<label>Your Name: <input type="text" name="name"></label>
		<label>Dojo Location: <input type="text" name="dl"></label>
		<label>Favorite Language: <input type="text" name="fl"></label>
		<label>Comment (Optional): <TextArea name="comment" rows="4"></TextArea></label>
		 <button>Submit</button>
	</form>
</body>
</html>