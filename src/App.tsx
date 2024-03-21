import { CharacterCard } from "./CharacterCard";
import { TeamCard } from "./TeamCard";
import { characters } from "./characters";
import { Logo } from "./icons/Logo";

function App() {
  return (
    <>
      <nav className="p-4 border-b border-gray-700 flex gap-2 items-center justify-center">
        <Logo />
        <h1 className="text-2xl font-bold">DBZ Dream Team</h1>
      </nav>
      <main className="p-10 grid grid-cols-3 bg-background gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </main>
      <aside className="fixed top-2 left-2">
        <TeamCard members={characters} />
      </aside>
    </>
  );
}

export default App;
