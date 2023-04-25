import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { CharacterStructure } from "../types";

const apiUrl = "https://apistarwars.onrender.com/";
const App = (): JSX.Element => {
  const [characters, setCharacter] = useState<CharacterStructure[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiUrl}characters`);
      const characterApi = (await response.json()) as CharacterStructure[];
      loadCharacter(characterApi);
    })();
  }, []);

  const loadCharacter = (characterList: CharacterStructure[]): void => {
    setCharacter(characterList);
  };

  return (
    <main className="main">
      <h1>Star Wars Characters</h1>
      <div>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </main>
  );
};

export default App;
