// import { element } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todoList, setTodolist] = useState([]);
	const handleRemoveItem = (e) => {
		// const name = e.target.getAttribute("name")
		setTodolist(todoList.filter((element) => element !== element));
		console.log("clicked");
	};
	return (
		<>
			<div className="input-group mb-3">
				<input
					type="test"
					className="form-control"
					placeholder="add a task"
					onChange={(e) => setItem(e.target.value)}
					value={item}
				/>
				<button
					onClick={() => {
						setTodolist([...todoList, item]);
						console.log(todoList);
					}}
					type="btn btn-secondary"
					className="input-group-test"
					id="basic-addon1">
					Add Task
				</button>
			</div>
			<ul>
				{todoList.map((element, index) => (
					<>
						<li key={index}>{element}</li>
						<button onClick={handleRemoveItem}>delete</button>
					</>
				))}
			</ul>
		</>
	);
};

export default Home;
