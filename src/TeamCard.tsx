import { useMemo } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";

export function TeamCard({ members }) {
  const combinedKi = useMemo(() => {
    return members.reduce((acc, member) => acc + parseInt(member.ki), 0);
  }, []);

  return (
    <Card className="w-full bg-purple-600">
      <CardContent className="p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-background">Team</h1>
        </div>
        {members.length > 0 ? (
          <>
            <div className="flex -space-x-2 rtl:space-x-reverse mb-2">
              {members.map((member) => (
                <Avatar className="ring-2 ring-primary" key={member.name}>
                  <AvatarImage
                    className="bg-background object-contain object-top"
                    src={member.image}
                  />
                  <AvatarFallback>{member.name}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-background text-sm font-ligth">
              Combined Ki: {combinedKi}
            </p>
          </>
        ) : (
          <p className="text-background text-sm">No members selected yet</p>
        )}
      </CardContent>
    </Card>
  );
}
