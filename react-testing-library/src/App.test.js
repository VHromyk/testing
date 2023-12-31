import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  // first test
  // const helloWorldElem = screen.getByText(/hello world/i);
  // const btnElem = screen.getByRole('button');
  // const inputElem = screen.getByPlaceholderText(/input value/i);
  // expect(helloWorldElem).toBeInTheDocument();
  // expect(btnElem).toBeInTheDocument();
  // expect(inputElem).toBeInTheDocument();
  // expect(inputElem).toMatchSnapshot();
  // screen.debug()

  // Отсутствие елемента
  // const helloWorldElem = screen.queryByText(/hello2/i);
  // expect(helloWorldElem).toBeNull()

  screen.debug();
  const helloWorldElem = await screen.findByText(/data/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(helloWorldElem).toHaveStyle({ color: "red" });
  screen.debug();
});

test("click event", () => {
  render(<App />);

  const btn = screen.getByTestId("button-elem");

  expect(screen.queryByTestId("toggle-elem")).toBeNull();
  fireEvent.click(btn);
  expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
  fireEvent.click(btn);
  expect(screen.queryByTestId("toggle-elem")).toBeNull();
});

test("input event", () => {
  render(<App />);

  const input = screen.getByTestId("input-elem");

  expect(screen.queryByTestId("title-elem")).toContainHTML("");

  // Artificial event
  // fireEvent.change(input, {target: {value: '123123'}})

  // Close to the user, keypress events are processed
  act(() => {
    userEvent.type(input, "123123");
  });

  expect(screen.queryByTestId("title-elem")).toContainHTML("123123");
});
