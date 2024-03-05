import React from "react";
import ToDos from "./todos"
const Home = () => {
	
	return (
		<div className="text-center pageDIV">
			<h1 className="mt-3 todosText">to-do List</h1>
			<ToDos />
		</div>
	);
};

export default Home;
