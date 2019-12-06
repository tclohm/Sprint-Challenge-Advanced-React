import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/';
import App from './App';
import DarkModeButton from "./components/DarkModeButton";
import Players from "./components/Players";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("the app has mounted dark mode button", () => {
	const wrapper = rtl.render(<DarkModeButton />);
	const element = wrapper.queryByText(/dark mode/i)
	expect(element)
});

test("the app has mounted Players", () => {
	const wrapper = rtl.render(<Players />);
	function callback(data) {
		expect(data).toBeInTheDocument();
		done()
	}
	fetchData(callback);
});
