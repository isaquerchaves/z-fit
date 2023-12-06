"use client"

import Login from "@/components/ui/login";
import { PlusIcon } from "lucide-react";
import { useSession } from "next-auth/react";

const Trainings = () => {
    const { data } = useSession();

    return (
        <>
            {data ?
                <div className="flex flex-col h-full items-center justify-center p-4 gap-4">
                    <p className="text-xl">Nenhum treino encontrado!</p>
                    <button className="w-[70%] flex flex-row gap-2 py-4 bg-[#0B46C7] border rounded-full justify-center">
                        <PlusIcon />
                        <p className="uppercase text-sm font-bold">Adicionar treino</p>
                    </button>
                </div>
                : <Login />
            }
        </>
    );
}

export default Trainings;