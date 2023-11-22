import { Exercise } from "@prisma/client";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ExercisesProps {
    exercise: Exercise;
}

const ExercisesCard = ({ exercise }: ExercisesProps) => {
    return (
        <div className="border flex flex-row justify-start p-4 gap-4 h-36 w-auto lg:min-h-full lg:w-3/5">
            <div className="flex justify-center items-center rounded-lg h-[100px] w-[100px] bg-[#0B46C7] p-4">
                <Image
                    src={exercise.image[0]}
                    alt={exercise.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h-[100px] w-auto max-w-[100px]  p-4"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="flex flex-row justify-between items-center p-4 gap-4">
                <div className="flex flex-col justify-start items-start">
                    <div className="">
                        <p className="">{exercise.name}</p>
                        <p className=" text-xs opacity-70">{exercise.instructions}</p>
                    </div>
                </div>
                <button className="border rounded-xl p-1 border-accent">
                    <Plus/>
                </button>
                
            </div>

        </div>
    );
}

export default ExercisesCard;