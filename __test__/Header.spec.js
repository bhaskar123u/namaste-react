import Header from "../src/components/Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router";
import MyContext from "src/common/MyContext";
import AppStore from "src/common/AppStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// since we are using navigate() in header, we have to wrap it in <MemoryRouter> in the test file and pass all necessary context and redux store variables, as we are rendering this component in isolation in jsdom, it only knows JSX, React. It has no idea about Redux and hence it fails.
beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <MyContext.Provider
          value={{
            modalOn: false,
            setModalOn: jest.fn(),
            loggedInUserName: null,
            setLoggedInUserName: jest.fn(),
            pendingPath: null,
            setPendingPath: jest.fn(),
          }}
        >
          <Header />
        </MyContext.Provider>
      </Provider>
    </BrowserRouter>
  );
});

it("Should load header component with a button", () => {
  const loginButton = screen.getByRole("button");
  // let's say we have multiple button on screens but we want to test a specific button which has name as Login
  // const loginButton = screen.getByRole("button", {name: "Login"});
  expect(loginButton).toBeInTheDocument();
});

// regex can be used with text
it("Should load header with Cart text", () => {
  // regex search, this will search whatever is written inside /.../
  const cartText = screen.getByText(/Cart/);
  expect(cartText).toBeInTheDocument();
});
