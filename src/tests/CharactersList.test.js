import { render, screen, waitFor } from "@testing-library/react";

import { HashRouter } from "react-router";
import CharactersList from "../features/CharactersList";
import { getCharacters } from "../features/api/apiData";

jest.mock("../features/api/apiData", () => ({
  getCharacters: jest.fn(),
}));

test("Displays the loader while fetching data", async () => {
  getCharacters.mockResolvedValueOnce({ results: [], info: { pages: 1 } });

  render(
    <HashRouter>
      <CharactersList />
    </HashRouter>
  );

  expect(screen.getByText(/Loading characters.../i)).toBeInTheDocument();
});

const mockCharacters = [
  {
    id: 1,
    name: "Rick Sanchez",
    species: "Human",
    status: "Alive",
    gender: "Male",
    image: "rick.jpg",
  },
  {
    id: 2,
    name: "Beth Smith",
    species: "Human",
    status: "Dead",
    gender: "Female",
    image: "morty.jpg",
  },
];

test("Renders correctly and fetches characters", async () => {
  getCharacters.mockResolvedValueOnce({
    results: mockCharacters,
    info: { pages: 1 },
  });

  render(
    <HashRouter>
      <CharactersList />
    </HashRouter>
  );

  expect(screen.getByText(/Loading characters.../i)).toBeInTheDocument();

  await waitFor(() =>
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
  );

  expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  expect(screen.getByText("Beth Smith")).toBeInTheDocument();
  expect(screen.getByText("Alive")).toBeInTheDocument();
  expect(screen.getByText("Dead")).toBeInTheDocument();
});
