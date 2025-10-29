import { render, screen } from "@testing-library/react";
import TodoApp from "../TodoApp";

describe("TodoApp", () => {
  it("renders the heading 'Todo List React App'", () => {
    render(<TodoApp />);

    const heading = screen.getByRole("heading", {
      name: /todo list react app/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Todo List React App");
  });

  it("shows an empty state message when there are no todos", () => {
    render(<TodoApp />);

    expect(screen.getByText("No todos yet.")).toBeInTheDocument();
  });
});
