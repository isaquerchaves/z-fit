import { Muscle } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface MuscleItem {
    muscle: Muscle;
}

const MuscleItem = ({ muscle }: MuscleItem) => {
    return (
        <Link href={`/muscle/${muscle.slug}`}>
            <div className="flex flex-col">
                <div className="flex h-[150px] w-full items-center justify-center bg-[#0B46C7] rounded-t-lg">
                    {/* IMAGEM DO MUSCULO*/}
                    <Image
                        src={muscle.imageUrl}
                        alt={muscle.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <div className="py-3 bg-accent rounded-b-lg">
                    <p className="text-center text-sm font-semibold">{muscle.name}</p>
                </div>
            </div>
        </Link>
    );
}

export default MuscleItem;