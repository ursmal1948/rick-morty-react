import { render, screen, fireEvent } from "@testing-library/react";
import { HashRouter } from "react-router";
import { Loader } from "../components/Loader";

test("Renderes correct message when fetching data for characters", () => {
  render(
    <HashRouter initialEntries={["/characters"]}>
      <Loader />
    </HashRouter>
  );

  expect(screen.getByText(/Loading characters.../i)).toBeInTheDocument();
});
