import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import CharactersList from "../features/CharactersList";
import CharacterDetails from "../features/CharacterDetails";
import PageHeader from "../components/PageHeader";

function App() {
  return (
    <>
      <HashRouter>
        <PageHeader message="RICK & MORTY" />
        <Routes>
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route
            path="/"
            element={<Navigate to="/characters?page=1" replace />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
