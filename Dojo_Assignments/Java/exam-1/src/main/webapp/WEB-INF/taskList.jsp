<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Tasks Home</title>
</head>
<body>
	<h1>Welcome, ${user.name}</h1>
	<a href="/logout">logout</a>
	<table>
    <thead>
        <tr>
            <th>Tasks</th>
            <th>Creator</th>
            <th>Assignee</th>
            <th>Priority</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${task}" var="task">
        <tr>
            <td><a href="/tasks/${task.id}"><c:out value="${task.title}"/></a></td>
            <td><c:out value="${task.user.name}"/></td>
            <td><c:out value="${task.assignee}"/></td>
            <td><c:out value="${task.priority}"/></td>
        </tr>
        </c:forEach>
    </tbody>
</table>

<a href="/tasks/new">create task</a>

</body>
</html>