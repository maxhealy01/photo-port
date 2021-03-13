import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "..";

const mockToggleModal = jest.fn();
const currentPhoto = {
	name: "Park bench",
	category: "landscape",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
	index: 1,
};
afterEach(cleanup);

describe("Modal component", () => {
	//First Test
	it("renders", () => {
		render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />);
	});
	//Second test
	it("matches snapshot DOM node structure", () => {
		// Render Modal
		const { asFragment } = render(
			<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
		);
		expect(asFragment()).toMatchSnapshot();
	});
	// it("renders", () => {
	// 	const { getByTestId } = render(<Modal currentPhoto={currentPhoto} onClose={toggleModal} />);
	// 	expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
	// });
	// it("renders", () => {
	// 	const { getByTestId } = render(<Modal currentPhoto={currentPhoto} onClose={toggleModal} />);
	// 	expect(getByTestId("button")).toHaveTextContent("Submit");
	// });
});

describe("Click event", () => {
	it("calls onClose handler", () => {
		const { getByText } = render(
			<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />
		);
		fireEvent.click(getByText("Close this modal"));
		expect(mockToggleModal).toHaveBeenCalledTimes(1);
	});
});
