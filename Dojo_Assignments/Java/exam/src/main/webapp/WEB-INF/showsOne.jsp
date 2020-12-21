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
	<h1><c:out value="${show.title}"/></h1>
	<h2><c:out value="${show.network}"/></h2>
	
	<h2>Users who Rated!</h2>
	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Rating</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${show.ratings}" var="rate">
	        <tr>
	            <td><c:out value="${rate.user.name}"/></td>
	            <td><c:out value="${rate.rating}"/></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	
	<form:form action="/shows/addRating/${show.id}" method="POST" modelAttribute="newRating">
		<label>Rating</label>
        <select name="rating">
            <option>5</option>
            <option>4</option>
            <option selected>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <form:errors path="rating"/>
        <input type="submit" value="Rate" />
     </form:form> 
	<a href="/shows/${show.id}/edit">Edit</a>
	
	
</body>
</html>