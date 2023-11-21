import { prismaClient } from "@/lib/prisma";
import MuscleItem from "./components/muscle-item";

const MuscleExercises = async () => {
    const muscle = await prismaClient.muscle.findMany({});
    return (
        <div className="flex flex-col gap-8 p-5 lg:container">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
                {muscle.map(
                    (muscle) => (
                        <MuscleItem key={muscle.id} muscle={muscle} />
                    )
                )}
            </div>
        </div>
    );
}

export default MuscleExercises;