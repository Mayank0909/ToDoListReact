import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ListCom from "./ListCom";
const ToDoList = () => {
	const [item, setitem] = useState("");
	const [newItem, setnewItem] = useState([]);
	const itemEvent = (event) => {
		setitem(event.target.value);
	};
	const listOfItems = () => {
		setnewItem((preValue) => {
			return [...preValue, item];
		});
		setitem(" ");
	};

	return (
		<>
			<h1>ToDo List</h1>
			<input
				type="text"
				placeholder="enter item or task"
				onChange={itemEvent}
				value={item}
			/>
			<Button variant="outlined" onClick={listOfItems}>
				+
			</Button>
			<br />
			<ol>
				{newItem.map((val, index) => {
					return <ListCom text={val} key={index} id={index} />;
				})}
			</ol>
		</>
	);
};

export default ToDoList;
