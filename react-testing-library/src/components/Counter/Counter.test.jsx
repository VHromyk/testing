import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import renderTestApp from "../../tests/helpers/renderTestApp";

describe("Counter", () => {
  test("increment button click", () => {
    const { getByTestId } = renderTestApp(null, {
      route: '/',
      initialState: {
        counter: { value: 100 },
      }
    });

    const incrementBtn = getByTestId("increment-btn");

    expect(getByTestId("counter-value")).toHaveTextContent("100");

    act(() => {
      userEvent.click(incrementBtn);
    });

    expect(getByTestId("counter-value")).toHaveTextContent("101");
  });

});
