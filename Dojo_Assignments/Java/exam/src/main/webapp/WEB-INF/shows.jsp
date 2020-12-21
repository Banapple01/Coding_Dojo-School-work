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
	
	<h1>Welcome, ${user.name}</h1>
	<table>
    <thead>
        <tr>
            <th>Show</th>
            <th>Network</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${show}" var="show">
        <tr>
            <td><a href="/shows/${show.id}"><c:out value="${show.title}"/></a></td>
            <td><c:out value="${show.network}"/></td>
        </tr>
        </c:forEach>
    </tbody>
</table>

<a href="/shows/new">add a show</a>

</body>
</html>