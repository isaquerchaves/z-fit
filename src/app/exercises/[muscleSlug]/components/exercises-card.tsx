import { Plus } from "lucide-react";
import image from "next/image";
import Image from "next/image";

const ExercisesCard = ({ exercise }: any) => {
    const image = exercise.Image.length > 0 ? exercise.Image[0] : "";

    return (
        <div className="border flex flex-row justify-start p-4 gap-4 h-36 w-auto lg:min-h-full lg:w-3/5">
            <div className="flex justify-center items-center rounded-lg h-[100px] w-[100px] bg-[#0B46C7] p-4">
                <Image
                    src={image}
                    alt={exercise.Name}
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
                        <p className="">{exercise.Name}</p>
                        <p className=" text-xs opacity-70">{exercise.Instructions}</p>
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