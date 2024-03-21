import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export function CharacterCard({ character }) {
  return (
    <Card className="p-2">
      <CardContent className="p-3 space-y-3">
        <img src={character.image} className="w-full h-40 object-contain" />
        <h1 className="text-xl font-bold text-foreground flex gap-2 items-center">
          {character.name}
        </h1>
        <h2 className="text-foreground text-sm">
          Ki: <Badge variant="secondary">{character.ki}</Badge>
        </h2>
        <h3 className="text-foreground text-xs text-gray-400">
          Race: {character.race}
        </h3>
        <p className="text-foreground text-xs text-gray-400 overflow-hidden h-20">
          {character.description}
        </p>
        <Button className="w-full">Add to Team</Button>
      </CardContent>
    </Card>
  );
}
