import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
const ToDoList = () => {
	return (
		<>
			<h1>ToDo List</h1>
			<input type="text" placeholder="enter item or task" />
			<Button variant="outlined">Outlined</Button>
		</>
	);
};

export default ToDoList;
