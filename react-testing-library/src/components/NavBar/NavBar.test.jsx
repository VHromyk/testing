import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "../../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";

describe("NAVBAR TEST", () => {
  test("test about link", () => {
    renderWithRouter(<NavBar />);
    const aboutLink = screen.getByTestId("about-link");

    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("test main link", () => {
    renderWithRouter(<NavBar />);

    const mainLink = screen.getByTestId("main-link");

    act(() => {
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("test users link", () => {
    renderWithRouter(<NavBar />);

    const usersLink = screen.getByTestId("users-link");

    act(() => {
      userEvent.click(usersLink);
    });
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
