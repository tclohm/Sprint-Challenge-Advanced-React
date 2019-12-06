import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import "../App.css"

const DarkModeButton = () => {
	const [darkMode, setDarkMode] = useDarkMode(false);
	const handleToggle = (event) => {
		event.preventDefault();
		setDarkMode(!darkMode);
	};

	return (
		<button onClick={handleToggle} className={darkMode ? 'dark' : 'not-dark'}>
			DARKMODE
		</button>
	);
};

export default DarkModeButton;