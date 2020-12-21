<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit a Task</title>
</head>
<body>
<form:form action="/tasks/${task.id}/edit" method="post" modelAttribute="task">
    <p>
        <form:label path="title">Title</form:label>
        <form:errors path="title"/>
        <form:input path="title"/>
    </p>
    <p>
		<form:label path = "assignee">Assignee</form:label>
        <form:select path = "assignee">
        	<c:forEach items="${user}" var="user">
            	<form:option value ="${user.name}">${user.name}</form:option>
            </c:forEach>
        </form:select>
    </p> 
    <p>
		<form:label path = "priority">Priority</form:label>
        <form:select path = "priority">
           	<form:option value ="High">High</form:option>
           	<form:option value ="Medium">Medium</form:option>
           	<form:option value ="Low">Low</form:option>
        </form:select>
    </p>
    <input type="submit" value="Edit"/>
</form:form> 
</body>
</html>