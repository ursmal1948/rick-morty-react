import { render, screen, waitFor } from "@testing-library/react";

import { HashRouter } from "react-router";
import CharacterDetails from "../features/CharacterDetails";
import { getCharacterDetails } from "../features/api/apiData";

jest.mock("../features/api/apiData", () => ({
  getCharacterDetails: jest.fn(),
}));

const mockCharacter = {
  id: 1,
  name: "Rick Sanchez",
  species: "Human",
  status: "Alive",
  gender: "Male",
  image: "rick.jpg",
  origin: { name: "Earth" },
  location: { name: "Citadel of Ricks" },
  episode: ["Ep1", "Ep2"],
  created: "2017-11-04T18:48:46.250Z",
};

test("Fetches and displays character details", async () => {
  getCharacterDetails.mockResolvedValueOnce(mockCharacter);

  render(
    <HashRouter>
      <CharacterDetails />
    </HashRouter>
  );

  await waitFor(() =>
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
  );

  expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  expect(screen.getByText("Human")).toBeInTheDocument();
  expect(screen.getByText("Origin: Earth")).toBeInTheDocument();
  expect(screen.getByText("Location: Citadel of Ricks")).toBeInTheDocument();
  expect(screen.getByText("Number of episodes: 2")).toBeInTheDocument();
  expect(screen.getByText("Created: 2017-11-04")).toBeInTheDocument();
});
