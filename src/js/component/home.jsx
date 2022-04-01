// import { element } from "prop-types";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todoList, setTodolist] = useState([]);
	const line = (x) => {
		const newList = todoList.filter((element, index) => index !== x);
		setTodolist(newList);
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
						if (item !== "") {
							setTodolist([...todoList, item]);
							setItem("");
						}
					}}
					type="btn btn-secondary"
					className="input-group-test"
					id="basic-addon1">
					Add Task
				</button>
			</div>
			<ul>
				{todoList.map((element, index) => {
					return (
						<li key={index} className="mr-2">
							{element}
							<a
								className="btn btn-primary"
								onClick={() => {
									line(index);
								}}>
								x
							</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
