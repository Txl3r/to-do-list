import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [item, setItem] = useState("");
	const [todoList, setTodolist] = useState([]);
	const handleRemoveItem = (e) => {
		const name = e.target.getAttribute("name");
		updateList(list.filter((item) => item.name !== name));
	};
	return (
		<div className="input-group mb-3">
			{todoList.map((item) => {
				return (
					<>
						<span
							name={item.name}
							onClick={handleRemoveItem}></span>
						<span key={index}>{item.name}</span>
					</>
				);
			})}
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
			<ul>
				{todoList.map((element, index) => (
					<li key={index}>{element}</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
