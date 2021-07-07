import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import DarkModeButton from "./components/DarkModeButton";
import Players from "./components/Players";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("the app has the text header", () => {
	const wrapper = rtl.render(<App />);
	const element = wrapper.queryByText(/sprint challenge/i);
	expect(element).toBeInTheDocument();
})

test("the app has mounted darkmode button", () => {
	const wrapper = rtl.render(<DarkModeButton />);
	const element = wrapper.queryByText(/darkmode/i);
	expect(element).toBeInTheDocument();
});
