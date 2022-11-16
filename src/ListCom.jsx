import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const ListCom = (props) => {
	const [line, setline] = useState(false);
	const cutIt = () => {
		setline(true);
	};
	return (
		<>
			<div className="listdiv">
				<li
					className="list"
					style={{ textDecoration: line ? "line-through" : "none" }}
				>
					<span>
						<button onClick={cutIt} className="listButton">
							X
						</button>
					</span>
					{props.text}
				</li>
			</div>
		</>
	);
};
export default ListCom;
