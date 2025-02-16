import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter } from "react-router";

import Pagination from "./components/Pagination";

import { useNavigate } from "react-router";
jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

test("Renders Pagination component", () => {
  render(
    <HashRouter>
      <Pagination page="1" totalPages={10} />
    </HashRouter>
  );

  expect(
    screen.getByText(
      (content) => content.includes("1") && content.includes("10")
    )
  ).toBeInTheDocument();
});

test("Renders pagination buttons", () => {
  render(
    <HashRouter>
      <Pagination page="5" totalPages={10} />
    </HashRouter>
  );

  expect(screen.getByText("First")).toBeInTheDocument();
  expect(screen.getByText("Previous")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
  expect(screen.getByText("Last")).toBeInTheDocument();
});

test("Displays correct page numbers", () => {
  render(
    <HashRouter>
      <Pagination page="5" totalPages={10} />
    </HashRouter>
  );

  expect(screen.getByText("5")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
});

test("Disables first and previous buttons on the first page", () => {
  render(
    <HashRouter>
      <Pagination page="1" totalPages={10} />
    </HashRouter>
  );

  const firstButton = screen.getByText("First").closest("button");
  const previousButton = screen.getByText("Previous").closest("button");

  expect(firstButton).toBeDisabled();
  expect(previousButton).toBeDisabled();
});

test("Disables last and next buttons on the last page", () => {
  render(
    <HashRouter>
      <Pagination page="10" totalPages={10} />
    </HashRouter>
  );

  const lastButton = screen.getByText("Last").closest("button");
  const nextButton = screen.getByText("Next").closest("button");

  expect(lastButton).toBeDisabled();
  expect(nextButton).toBeDisabled();
});

test("Disables no buttons", () => {
  render(
    <HashRouter>
      <Pagination page="9" totalPages={10} />
    </HashRouter>
  );

  const firstButton = screen.getByText("First").closest("button");
  const previousButton = screen.getByText("Previous").closest("button");
  const lastButton = screen.getByText("Last").closest("button");
  const nextButton = screen.getByText("Next").closest("button");

  expect(firstButton).not.toBeDisabled();
  expect(previousButton).not.toBeDisabled();
  expect(lastButton).not.toBeDisabled();
  expect(nextButton).not.toBeDisabled();
});

test("Navigates to the previous page", () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(
    <HashRouter>
      <Pagination page="3" totalPages={10} />
    </HashRouter>
  );

  const previousButton = screen.getByText("Previous").closest("button");
  fireEvent.click(previousButton);

  expect(mockNavigate).toHaveBeenCalledWith(expect.stringContaining("page=2"));
});

test("Navigates to the first page", () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(
    <HashRouter>
      <Pagination page="2" totalPages={10} />
    </HashRouter>
  );

  const firstButton = screen.getByText("First").closest("button");
  fireEvent.click(firstButton);

  expect(mockNavigate).toHaveBeenCalledWith(expect.stringContaining("page=1"));
});

test("Navigates to the next page", () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(
    <HashRouter>
      <Pagination page="2" totalPages={10} />
    </HashRouter>
  );

  const nextButton = screen.getByText("Next").closest("button");
  fireEvent.click(nextButton);

  expect(mockNavigate).toHaveBeenCalledWith(expect.stringContaining("page=3"));
});

test("Navigates to the last page", () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(
    <HashRouter>
      <Pagination page="2" totalPages={10} />
    </HashRouter>
  );

  const lastButton = screen.getByText("Last").closest("button");
  fireEvent.click(lastButton);

  expect(mockNavigate).toHaveBeenCalledWith(expect.stringContaining("page=10"));
});

test("Disables all buttons when there is only one page", () => {
  render(
    <HashRouter>
      <Pagination page="1" totalPages={1} />
    </HashRouter>
  );

  const firstButton = screen.getByText("First").closest("button");
  const previousButton = screen.getByText("Previous").closest("button");
  const lastButton = screen.getByText("Last").closest("button");
  const nextButton = screen.getByText("Next").closest("button");

  expect(firstButton).toBeDisabled();
  expect(previousButton).toBeDisabled();
  expect(lastButton).toBeDisabled();
  expect(nextButton).toBeDisabled();
});
