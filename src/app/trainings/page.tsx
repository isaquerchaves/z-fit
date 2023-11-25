import { PlusIcon } from "lucide-react";

const Trainings = () => {
    return (
        <div className="flex flex-col h-full items-center justify-center p-4 gap-4">
            <p className="text-xl">Nenhum treino encontrado!</p>
            <div className="w-[70%] flex flex-row gap-2 py-4 bg-[#0B46C7] border rounded-full justify-center">
                <PlusIcon />
                <button>
                    <p className="uppercase text-sm font-bold">Adicionar treino</p>
                </button>
                
            </div>

        </div>

    );
}

export default Trainings;