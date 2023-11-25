import { prismaClient } from "@/lib/prisma";
import ExerciciesCard from "./components/exercises-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const MuscleExercisies = async ({ params }: any) => {
    const muscle = await prismaClient.muscle.findFirst({
        where: {
            slug: params.slug,
        },
        include: {
            exercises: true,
        },
    });
    if (!muscle) {
        return null;
    }

    return (
        <ScrollArea className="h-full">
            <div>
                {muscle.exercises.map((exercises) => (
                    <ExerciciesCard
                        key={exercises.id}
                        exercise={exercises}
                    />
                ))}
            </div>
        </ScrollArea>
    );
}

export default MuscleExercisies;