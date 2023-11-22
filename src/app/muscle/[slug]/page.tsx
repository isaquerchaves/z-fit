import { prismaClient } from "@/lib/prisma";
import ExerciciesCard from "./components/exercises-card";

const MuscleExercisies = async ({params}:any) => {
    const muscle = await prismaClient.muscle.findFirst({
        where:{
            slug: params.slug,
        },
        include:{
            exercises: true,
        },
    });
    if (!muscle){
        return null;
    }

    return ( 
        <div>
            {muscle.exercises.map((exercises) => (
                <ExerciciesCard
                    key={exercises.id}
                    exercise={exercises}
                />
            ))}
        </div>
     );
}
 
export default MuscleExercisies;