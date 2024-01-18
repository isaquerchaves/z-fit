import { prismaClient } from "@/lib/prisma";

const CreateTraining = async () => {
    const split = await prismaClient.trainingSplit.findMany({
        where: {
            enabled: true,
        }
    });

    return (
        <div className="flex flex-col h-full p-4">
            <p className="text-xl">Crie seu treino!💪</p>
            <form className="grid grid-cols-2 gap-4 my-4 justify-between">
                {split.map((split) => (
                    <div key = {split.id} className = "flex items-center justify-center bg-[#0B46C7] text-white p-2 rounded" >
                        <input
                            type="radio"
                            id={split.id}
                            name="trainingSplit"
                        />
                        <label htmlFor={split.id} className="ml-2">
                            {split.name}
                        </label>
                    </div>
                ))
                }
                <button type="submit" className="py-4 bg-[#0B46C7] border rounded-full">
                    Criar Treino
                </button>
            </form >
        </div >
    );
}

export default CreateTraining;