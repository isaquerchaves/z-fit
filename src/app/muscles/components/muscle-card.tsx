import { useFetchMuscles } from "@/app/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";

const MuscleCard = () => {
  const muscles = useFetchMuscles();

  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
      {muscles.map((muscle: any) => (
        <Link key={muscle.ID} href={`/exercises/${muscle.Slug}`}>
            <div className="flex h-[150px] w-full items-center justify-center bg-[#0B46C7] rounded-t-lg">
              <Image
                src={muscle.ImageURL}
                alt={muscle.Name}
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
              <p className="text-center text-sm font-semibold">{muscle.Name}</p>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default MuscleCard;
