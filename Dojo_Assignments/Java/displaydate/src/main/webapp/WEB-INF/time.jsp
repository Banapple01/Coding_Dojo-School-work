<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Time Template</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript">alert("This is the Time Template");</script>
</head>
<body>
	 <c:out value="${date}" ></c:out>
</body>
</html>