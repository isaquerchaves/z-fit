import { prismaClient } from "@/lib/prisma";
import MuscleItem from "./components/muscle-item";
import { ScrollArea } from "@/components/ui/scroll-area";

const MuscleExercises = async () => {
    const muscle = await prismaClient.muscle.findMany({});
    return (
                <ScrollArea className="h-full">
                        <div className="flex flex-col gap-8 p-5 lg:container">
                            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
                                {muscle.map(
                                    (muscle) => (
                                        <MuscleItem key={muscle.id} muscle={muscle} />
                                    )
                                )}
                            </div>
                        </div>
                </ScrollArea>
    );
}

export default MuscleExercises;