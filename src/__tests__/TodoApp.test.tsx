import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "../TodoApp";

describe("TodoApp", () => {
  it("renders the heading 'Todo List React App'", () => {
    render(<TodoApp />);

    const heading = screen.getByRole("heading", { name: /todo list react app/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Todo List React App");
  });

  it("shows an empty state message when there are no todos", () => {
    render(<TodoApp />);

    expect(screen.getByText("No todos yet.")).toBeInTheDocument();
  });

  it("allows adding a todo item", async () => {
    const user = userEvent.setup();
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("Enter a new todo");
    const addButton = screen.getByRole("button", { name: /add todo/i });

    await user.type(input, "Buy groceries");
    await user.click(addButton);

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.queryByText("No todos yet.")).not.toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("allows deleting a todo item", async () => {
    const user = userEvent.setup();
    render(<TodoApp />);

    const input = screen.getByPlaceholderText("Enter a new todo");
    const addButton = screen.getByRole("button", { name: /add todo/i });

    await user.type(input, "Read a book");
    await user.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await user.click(deleteButton);

    expect(screen.queryByText("Read a book")).not.toBeInTheDocument();
    expect(screen.getByText("No todos yet.")).toBeInTheDocument();
  });
});
