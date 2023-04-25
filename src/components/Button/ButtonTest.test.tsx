import Button from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it receives the text 'Delete' ", () => {
    test("Then it should show a button with the 'Delete' text inside", () => {
      const expectedText = "Delete";
      const expectedAction = jest.fn();

      render(
        <Button text={`${expectedText}`} actionOnClick={expectedAction} />
      );

      const button = screen.getByRole("button", { name: expectedText });
      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks and receives an action ", () => {
    test("Then it should call te receives action", async () => {
      const expectedAction = jest.fn();

      render(<Button text="" actionOnClick={expectedAction} />);

      const button = screen.getByRole("button", { name: "" });
      await userEvent.click(button);

      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
