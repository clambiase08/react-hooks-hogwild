import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

console.log(hogs)

function App() {
	return (
		<div className="App">
			<Nav />
			<HogContainer hogs={hogs}/>
		</div>
	);
}

export default App;
